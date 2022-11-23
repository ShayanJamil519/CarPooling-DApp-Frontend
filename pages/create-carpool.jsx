import Image from "next/image";
import React, { useState } from "react";
import { Form } from "web3uikit";
import { roughData } from "../dummyData";
import styles from "../styles/CreateCarpool.module.css";
import { handlePinFileToIPFS } from "../pinata";

const CreateCarpool = () => {
  //This function uploads the NFT image to IPFS

  let url;

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
          <Form
            // onSubmit=
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
          />
          <div>
            <label
              className="block text-purple-500 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Upload Image
            </label>
            <input type={"file"} onChange={OnChangeFile}></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCarpool;
