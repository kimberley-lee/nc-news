import propTypes from "prop-types";
import { UserContext } from "../contexts/User";
import { useContext, useState } from "react";
import { postData } from "./api";
import styles from "../css/PostComment.module.css";

function PostComment({ article_id }) {
  const { user } = useContext(UserContext);
  const [postedComment, setPostedComment] = useState({
    author: user,
    body: "",
  });
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    setIsSubmitted(false);
    postData(article_id, postedComment)
      .then(() => {
        setButtonDisabled(true);
        setPostedComment({ author: user, body: "" });
        setIsSubmitted(true);
      })
      .catch(() => {
        setErrorMessage(
          "Something went wrong with posting your comment. Try again later."
        );
        setIsLoading(false);
      });
  }

  function handleChange(event) {
    setPostedComment({
      ...postedComment,
      body: event.target.value,
    });
  }

  function handleClick() {
    setIsSubmitted(false);
    setButtonDisabled(false);
  }

  if (user === "") {
    return <h3>Please login to comment.</h3>;
  }

  return isSubmitted ? (
    <div>
      <p>You posted a comment! Would you like to post another comment?</p>
      <button className={styles.button} role="button" onClick={handleClick}>
        Post a comment!
      </button>
    </div>
  ) : (
    <section className={styles.commentBox}>
      <form className="postComment" onSubmit={handleSubmit}>
        <label className={styles.label}>Post your comment</label>
        <input
          className={styles.input}
          name="comment"
          type="text"
          required
          value={postedComment.body}
          onChange={handleChange}
        ></input>
        <br />
        <button className={styles.button} disabled={isButtonDisabled}>
          Post it!
        </button>
      </form>
    </section>
  );
}

export default PostComment;

PostComment.propTypes = {
  article_id: propTypes.number.isRequired,
};
