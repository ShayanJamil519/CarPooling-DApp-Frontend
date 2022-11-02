import Image from "next/image";
import React from "react";
import { Form } from "web3uikit";
import { roughData } from "../dummyData";
import styles from "../styles/CreateCarpool.module.css";

const CreateCarpool = () => {
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
        </div>
      </div>
    </div>
  );
};

export default CreateCarpool;
