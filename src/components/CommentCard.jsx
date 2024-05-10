import propTypes from "prop-types";
import { convertToRelativeDate } from "../utils/dates";
import styles from "../css/CommentCard.module.css";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import DeleteButton from "./DeleteButton";
import Card from "./Card";

function CommentCard({ body, author, votes, created_at, comment_id }) {
  const [isDeleted, setIsDeleted] = useState(false);

  const { user } = useContext(UserContext);

  function hideComment() {
    setIsDeleted(true);
  }

  const isByLoggedInUser = author === user;

  return isDeleted ? null : (
    <Card>
      <p className={styles.author}>Posted by: {author}</p>
      <p>{body}</p>
      <p>{convertToRelativeDate(created_at)}</p>
      <p>Upvotes: {votes}</p>
      {isByLoggedInUser && (
        <DeleteButton hideComment={hideComment} comment_id={comment_id} />
      )}
    </Card>
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
