import Image from "next/image";
import React, { useState } from "react";
import { Form, Input } from "web3uikit";
import { roughData } from "../dummyData";
import styles from "../styles/CreateCarpool.module.css";
import { handlePinFileToIPFS, handlePinJSONToIPFS } from "../pinata";
import Carpool from "../constants/Carpool.json";

const CreateCarpool = () => {
  const [formParams, updateFormParams] = useState({
    // ownerAddress: "",
    origin: "",
    destination: "",
    totalSlots: "",
    pricePerSlot: "",
  });

  let url;
  let metadataUrl = "";
  const ethers = require("ethers");

  //This function uploads the NFT image to IPFS
  async function OnChangeFile(e) {
    var file = e.target.files[0];

    try {
      //upload the file to IPFS
      const imageUploadResult = await handlePinFileToIPFS({
        selectedFiles: [file],
        customName: "name",
      });
      console.log("image uploaded!!!");
      // console.log(
      //   "https://gateway.pinata.cloud/ipfs/" + imageUploadResult.IpfsHash
      // );
      url = "https://gateway.pinata.cloud/ipfs/" + imageUploadResult.IpfsHash;
      console.log("url is ", url);
    } catch (e) {
      console.log("Error during file upload", e);
    }
  }

  // //This function uploads the metadata to IPFS
  // async function uploadMetadataToIPFS() {
  //   const { ownerAddress, origin, destination, totalSlots, pricePerSlot } =
  //     formParams;
  //   //Make sure that none of the fields are empty
  //   if (
  //     !ownerAddress ||
  //     !origin ||
  //     !destination ||
  //     !totalSlots ||
  //     !pricePerSlot
  //   )
  //     return;
  //   const nftJSON = {
  //     ownerAddress,
  //     origin,
  //     destination,
  //     totalSlots,
  //     pricePerSlot,
  //     image: url,
  //   };
  //   // https://gateway.pinata.cloud/ipfs/QmXH1rBtfV9BHC8kuZzydTuayLGS3NNBzkQbJSmwKFWeST

  //   if (url) {
  //     const imageUploadResult = await handlePinJSONToIPFS(nftJSON);
  //     console.log("metadata uploaded!!!");
  //     // console.log("imageUpload result", imageUploadResult);
  //     // console.log("imageUpload result", imageUploadResult.IpfsHash);
  //     metadataUrl =
  //       "https://gateway.pinata.cloud/ipfs/" + imageUploadResult.IpfsHash;
  //     console.log("Meta Data Url " + metadataUrl);
  //   } else {
  //     console.log("error uploading JSON metadata:");
  //   }
  // }

  async function createCarpool(e) {
    e.preventDefault();

    try {
      //After adding your Hardhat network to your metamask, this code will get providers and signers
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      //Pull the deployed contract instance
      let contract = new ethers.Contract(Carpool.address, Carpool.abi, signer);

      //massage the params to be sent to the create NFT request
      const price = ethers.utils.parseUnits(formParams.pricePerSlot, "ether");

      //   string memory _origin,
      // string memory _destination,
      // uint256 _slots,
      // uint256 _price,
      // string memory tokenURI
      //actually create the NFT
      let transaction = await contract.createCarPooling(
        formParams.origin,
        formParams.destination,
        formParams.totalSlots,
        price,
        url
      );
      await transaction.wait();

      alert("Successfully listed your Carpool!");
      updateFormParams({
        origin: "",
        destination: "",
        totalSlots: "",
        pricePerSlot: "",
      });
      // window.location.replace("/");
    } catch (e) {
      alert("Upload error" + e);
    }

    // abdullah
    // e.preventDefault();
    // console.log("form submitted");
    // try {
    //   // console.log(formParams);
    //   await uploadMetadataToIPFS();
    // } catch (e) {
    //   console.log("error uploading JSON metadata:", e);
    // }
  }

  return (
    <div className={styles.main_section}>
      <h1>Create Your Carpool</h1>
      <div>
        <div className={styles.left}>
          <Image
            src={roughData[0].imgSource}
            alt={roughData[0].imgAlt}
            width={150}
            height={150}
          />
        </div>
        <div className={styles.right}>
          <form onSubmit={createCarpool}>
            {/* <Input
              label="Owner Address"
              name="Owner Address"
              type="text"
              onChange={(e) =>
                updateFormParams({
                  ...formParams,
                  ownerAddress: e.target.value,
                })
              }
            /> */}
            <Input
              label="Origin"
              name="Origin"
              type="text"
              onChange={(e) =>
                updateFormParams({ ...formParams, origin: e.target.value })
              }
            />
            <Input
              label="Destination"
              name="Destination"
              type="text"
              onChange={(e) =>
                updateFormParams({ ...formParams, destination: e.target.value })
              }
            />
            <Input
              label="Number of slots for booking"
              name="Number of slots for booking"
              type="number"
              onChange={(e) =>
                updateFormParams({ ...formParams, totalSlots: e.target.value })
              }
            />
            <Input
              label="Price per slot"
              name="Price per slot"
              type="number"
              onChange={(e) =>
                updateFormParams({
                  ...formParams,
                  pricePerSlot: e.target.value,
                })
              }
            />

            <div>
              <label className="" htmlFor="image">
                Upload Image
              </label>
              <input type={"file"} onChange={OnChangeFile}></input>
            </div>

            <button style={{ marginTop: "10px" }}>Submit</button>
          </form>

          {/* <Form
            onSubmit={createCarpool}
            data={[
              {
                name: "Owner Address",
                type: "text",
                value: "",
                key: "add",
                inputWidth: "100%",
              },
              {
                name: "Origin",
                type: "text",
                value: "",
                key: "origin",
                inputWidth: "100%",
              },
              {
                name: "Destination",
                type: "text",
                value: "",
                key: "dest",
                inputWidth: "100%",
              },
              {
                name: "Number of slots for booking",
                type: "number",
                value: "",
                key: "no",
                inputWidth: "100%",
              },
              {
                name: "Price per slot",
                type: "number",
                value: "",
                key: "price",
                inputWidth: "100%",
              },
            ]}
            // title="Book your Carpool"
            id="Main Form"
          /> */}
          {/* =================== */}
          {/* <div>
            <label
              className="block text-purple-500 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Upload Image
            </label>
            <input type={"file"} onChange={OnChangeFile}></input>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CreateCarpool;
