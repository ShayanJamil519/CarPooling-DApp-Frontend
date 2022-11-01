import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Landing from "../components/Landing";
// import Cards from "../components/Cards";

export default function Home() {
  return (
    <div className={styles.container}>
      <Landing />
      {/* <Cards /> */}
    </div>
  );
}
