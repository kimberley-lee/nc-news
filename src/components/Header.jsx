import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";

export default function Header() {
  return (
    <header>
      <h1 className={styles.NCNews}>NC News</h1>
      <Link className={styles.link} to="/">
        Home
      </Link>
    </header>
  );
}
