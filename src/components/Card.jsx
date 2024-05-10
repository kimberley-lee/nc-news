import styles from "../css/Card.module.css";

function Card({ children }) {
  return <li className={styles.card}>{children}</li>;
}

export default Card;
