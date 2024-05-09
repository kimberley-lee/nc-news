import { useState } from "react";
import propTypes from "prop-types";
import { patchData } from "./api";
import styles from "../css/ArticleVotes.module.css";
function ArticleVotes({ article_id, article_votes }) {
  const [voteCounter, setVoteCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleClick = (vote) => {
    setIsLoading(true);
    setErrorMessage(null);
    patchData(article_id, vote)
      .then(() => {
        setVoteCounter((currVotes) => currVotes + vote);
      })
      .catch(() => {
        setErrorMessage(
          "Something went wrong with adding your vote. Try again later."
        );
        setIsLoading(false);
      });
  };

  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      <section className={styles.voteCounter}>
        <h1>Likes: {article_votes + voteCounter}</h1>
        <button
          className={styles.button}
          disabled={voteCounter === 1}
          onClick={() => handleClick(1)}
        >
          ❤️
        </button>
        <button
          className={styles.button}
          disabled={voteCounter === -1}
          onClick={() => handleClick(-1)}
        >
          💔
        </button>
      </section>
    </>
  );
}

ArticleVotes.propTypes = {
  article_id: propTypes.number.isRequired,
  article_votes: propTypes.number.isRequired,
};

export default ArticleVotes;
