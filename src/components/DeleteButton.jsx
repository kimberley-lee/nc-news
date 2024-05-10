import propTypes from "prop-types";
import { useState } from "react";
import { deleteComment } from "./api";
import Button from "./Button";

function DeleteButton({ hideComment, comment_id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  function handleClick() {
    setIsLoading(true);
    setErrorMessage(null);
    deleteComment(comment_id)
      .then(() => {
        hideComment();
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage(
          "Something went wrong with deleting your comment. Try again later."
        );
        setIsLoading(false);
      });
  }

  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      <Button
        disabled={isLoading}
        onClick={handleClick}
        text="Delete comment"
      />
    </>
  );
}

export default DeleteButton;
DeleteButton.propTypes = {
  comment_id: propTypes.number.isRequired,
  hideComment: propTypes.func.isRequired,
};
