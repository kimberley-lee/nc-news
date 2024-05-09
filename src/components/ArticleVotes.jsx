import { useState } from "react";
import propTypes from "prop-types";
import { patchData } from "./api";
import styles from "../css/ArticleVotes.module.css";
function ArticleVotes({ article_id, article_votes }) {
  const [voteCounter, setVoteCounter] = useState(0);

  const handleClick = (vote) => {
    setVoteCounter((currVotes) => currVotes + vote);
    patchData(article_id, vote);
  };

  return (
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
  );
}

ArticleVotes.propTypes = {
  article_id: propTypes.number.isRequired,
  article_votes: propTypes.number.isRequired,
};

export default ArticleVotes;
