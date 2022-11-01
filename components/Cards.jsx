import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { roughData } from "../dummyData";

import styles from "../styles/Cards.module.css";

const Cards = () => {
  const router = useRouter();
  // const handleClick = (route) => {
  //   // e.preventDefault()
  //   router.push(route);
  // };

  return (
    <div>
      <h3 className={styles.title}>Services</h3>
      <div className={styles.mainContainer}>
        {roughData.map((item, i) => {
          return (
            <div className={styles.card} key={i}>
              <Image
                src={item.imgSource}
                alt={item.imgAlt}
                width={300}
                height={230}
              />

              <div>
                <span>Address: </span>
                <h6>{item.address}</h6>
              </div>

              <div>
                <span>Origin: </span>
                <h6>{item.origin}</h6>
              </div>

              <div>
                <span>Destination: </span>
                <h6>{item.destination}</h6>
              </div>

              <div>
                <span>No of Slots Available: </span>
                <h6>{item.numOfSlotsAvailable}</h6>
              </div>

              <div>
                <span>Price Per Slot: </span>
                <h6>{item.pricePerSlot}</h6>
              </div>

              <Link href="/">Book Now</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
