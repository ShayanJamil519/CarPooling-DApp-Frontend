import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.left}>
        <h1>Decentralized CarPooling</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio modi
          vel sequi sunt ratione ipsa animi error earum provident asperiores!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias,
          praesentium cupiditate? Temporibus nobis sequi commodi adipisci eaque
          porro itaque velit?
        </p>
        <Link href="/create-carpool">Create your carpool </Link>
      </div>

      <div className={styles.right}>
        <Image src="/bg1.png" width={700} height={550} />
      </div>
    </div>
  );
};

export default Landing;
