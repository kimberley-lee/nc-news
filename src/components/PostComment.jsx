import propTypes from "prop-types";
import { UserContext } from "../contexts/User";
import { useContext, useState } from "react";
import { postComment } from "./api";
import styles from "../css/PostComment.module.css";
import ErrorMessage from "./ErrorMessage";

function PostComment({ article_id, addComment }) {
  const { user } = useContext(UserContext);
  const [newCommentBody, setNewCommentBody] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    postComment(article_id, { author: user, body: newCommentBody })
      .then((postedComment) => {
        setIsLoading(false);
        addComment(postedComment);
        setNewCommentBody("");
      })
      .catch(() => {
        setErrorMessage("We couldn't save your comment. Try again later.");
        setIsLoading(false);
      });
  }

  function handleChange(event) {
    setNewCommentBody(event.target.value);
  }

  if (user === "") {
    return <h3>Please login to comment.</h3>;
  }

  return (
    <section className={styles.commentBox}>
      <form className="postComment" onSubmit={handleSubmit}>
        <label className={styles.label}>Post your comment</label>
        <input
          className={styles.input}
          name="comment"
          type="text"
          required
          value={newCommentBody}
          onChange={handleChange}
        ></input>
        {errorMessage && <ErrorMessage message={errorMessage} />}
        <br />
        <button className={styles.button} disabled={isLoading}>
          Post it!
        </button>
      </form>
    </section>
  );
}

export default PostComment;

PostComment.propTypes = {
  article_id: propTypes.string.isRequired,
};
