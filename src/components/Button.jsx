import propTypes from "prop-types";
import styles from "../css/Button.module.css";

function Button({ isLoading, text, ...props }) {
  return (
    <button className={styles.button} disabled={isLoading} {...props}>
      {text}
    </button>
  );
}

Button.propTypes = {
  isLoading: propTypes.bool.isRequired,
  text: propTypes.string.isRequired,
};

export default Button;
