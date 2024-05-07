import propTypes from "prop-types";
import { convertToRelativeDate } from "../utils/dates";
import styles from "../css/CommentCard.module.css";

function CommentCard({ body, author, votes, created_at }) {
  return (
    <li className={styles.card}>
      <p className={styles.author}>Posted by: {author}</p>
      <p>{body}</p>
      <p>{convertToRelativeDate(created_at)}</p>
      <p>Upvotes: {votes}</p>
    </li>
  );
}

CommentCard.propTypes = {
  body: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  votes: propTypes.number.isRequired,
  created_at: propTypes.string.isRequired,
};

export default CommentCard;
