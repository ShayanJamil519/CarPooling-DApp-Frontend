import Link from "next/link";
import { ConnectButton } from "web3uikit";
import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <nav className={styles.header}>
      <div>
        <Link href="/">
          <h1> Dbank</h1>
        </Link>
      </div>
      <div>
        <ConnectButton moralisAuth={false} />
      </div>
    </nav>
  );
}
