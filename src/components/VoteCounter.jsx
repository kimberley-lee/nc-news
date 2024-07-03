import { useState } from "react";
import propTypes from "prop-types";
import { patchData } from "./api";
import styles from "../css/ArticleVotes.module.css";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";

function VoteCounter({ id, votes, voteType }) {
  const [voteCounter, setVoteCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleClick = (vote) => {
    setIsLoading(true);
    setErrorMessage(null);
    patchData(id, vote, voteType)
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
        <p className={styles.likes}>Likes: {votes + voteCounter}</p>
        <button
          className={styles.button}
          disabled={voteCounter === 1}
          onClick={() => handleClick(1)}
        >
          <AiTwotoneLike />
        </button>
        <button
          className={styles.button}
          disabled={voteCounter === -1}
          onClick={() => handleClick(-1)}
        >
          <AiTwotoneDislike />
        </button>
      </section>
    </>
  );
}

VoteCounter.propTypes = {
  id: propTypes.number.isRequired,
  votes: propTypes.number.isRequired,
  voteType: propTypes.string.isRequired,
};

export default VoteCounter;
