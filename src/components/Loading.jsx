import { TailSpin } from "react-loading-icons";
import styles from "../css/Loading.module.css";

function Loading() {
  return (
    <div className={styles.icon}>
      <TailSpin stroke="black" />
    </div>
  );
}

export default Loading;
