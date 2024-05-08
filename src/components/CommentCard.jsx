import propTypes from "prop-types";
import { convertToRelativeDate } from "../utils/dates";
import styles from "../css/CommentCard.module.css";
import { useState } from "react";
import { deleteComment } from "./api";

function CommentCard({ body, author, votes, created_at, comment_id }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  function handleClick() {
    setIsLoading(true);
    setErrorMessage(null);
    deleteComment(comment_id)
      .then(() => {
        setIsDeleted(true);
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage(
          "Something went wrong with deleting your comment. Try again later."
        );
        setIsLoading(false);
      });
  }

  return isDeleted ? null : (
    <li className={styles.card}>
      <p className={styles.author}>Posted by: {author}</p>
      <p>{body}</p>
      <p>{convertToRelativeDate(created_at)}</p>
      <p>Upvotes: {votes}</p>
      {errorMessage && <p>{errorMessage}</p>}
      <button disabled={isLoading} onClick={handleClick}>
        Delete a comment
      </button>
    </li>
  );
}

CommentCard.propTypes = {
  body: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  votes: propTypes.number.isRequired,
  created_at: propTypes.string.isRequired,
  comment_id: propTypes.number.isRequired,
};

export default CommentCard;
