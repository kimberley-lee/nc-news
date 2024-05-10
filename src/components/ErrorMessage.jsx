import PropTypes from "prop-types";
import styles from "../css/ErrorMessage.module.css";

function ErrorMessage({ message }) {
  let msg;
  if (message.includes(404)) {
    msg =
      "Oh no! We couldn't find the page you're looking for. Please go back to the homepage.";
  } else if (message.includes(400)) {
    msg = "This page doesn't exist! Please go back to the homepage.";
  } else {
    msg = message;
  }

  return (
    <div className={styles.message}>
      <h2>Something went wrong</h2>
      <p>{msg}</p>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
export default ErrorMessage;
