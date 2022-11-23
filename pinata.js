// helper file:

import axios from "axios";
// import { env } from "constants/env";
require("dotenv").config();

import FormData from "form-data";

// const pinataApiKey: string = env.PINATA_API_KEY;
// const pinataSecretApiKey: string = env.PINATA_SECRET_API_KEY;

const pinataApiKey = "95d0e42c41aa3fde6bd2";
const pinataSecretApiKey = "";

export const getPinataApiConfig = () => {
  const config = {
    pinata_api_key: pinataApiKey,
    pinata_secret_api_key: pinataSecretApiKey,
  };
  return config;
};

export const handlePinFileToIPFS = async ({
  selectedFiles = [],
  customName,
}) => {
  try {
    const data = new FormData();

    if (customName && customName !== "") {
      const metadata = JSON.stringify({
        name: customName,
      });
      data.append("pinataMetadata", metadata);
    }

    const pinataOptions = JSON.stringify({
      cidVersion: 0,
    });
    data.append("pinataOptions", pinataOptions);

    if (selectedFiles.length > 0) {
      selectedFiles.forEach((file) => {
        data.append(`file`, file);
      });
    } else {
      data.append("file", selectedFiles[0], selectedFiles[0].name);
    }

    const res = await axios({
      method: "post",
      url: `https://api.pinata.cloud/pinning/pinFileToIPFS`,
      headers: {
        "Content-Type": `multipart/form-data;`,
        ...getPinataApiConfig(),
      },
      data: data,
    });

    return res.data;
  } catch (error) {
    //  Handle error
    console.log("error in handlePinFileToIPFS > ", error);
  }
};

export const handlePinJSONToIPFS = async (jsonContent) => {
  try {
    const JSONBody = {
      /* The "pinataMetadata" object will not be part of your content added to IPFS */
      /* Pinata simply stores the metadata provided to help you easily query your JSON object pins */
      pinataOptions: {
        cidVersion: 0,
      },
      /* The contents of the "pinataContent" object will be added to IPFS */
      /* The hash provided back will only represent the JSON contained in this object */
      /* The JSON the returned hash links to will NOT contain the "pinataMetadata" object above */
      pinataContent: jsonContent,
    };

    const res = await axios.post(
      `https://api.pinata.cloud/pinning/pinJSONToIPFS`,
      JSONBody,
      {
        headers: { ...getPinataApiConfig() },
      }
    );

    return res.data;
  } catch (error) {
    //  Handle error
    console.log("error in handlePinJSONToIPFS > ", error);
  }
};

export const handleUnpin = async ({ hashToUnpin }) => {
  try {
    const res = await axios.delete(
      `https://api.pinata.cloud/pinning/unpin/${hashToUnpin}`,
      {
        withCredentials: true,
        headers: {
          pinata_api_key: pinataApiKey,
          pinata_secret_api_key: pinataSecretApiKey,
        },
      }
    );

    return res.data;
  } catch (error) {
    //  Handle error
    console.log("error in handleUnpin > ", error);
  }
};
