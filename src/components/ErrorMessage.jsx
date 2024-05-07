import PropTypes from "prop-types";

function ErrorMessage({ message }) {
  return (
    <>
      <h2>Something went wrong!</h2>
      <p>{message}</p>
    </>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
export default ErrorMessage;
