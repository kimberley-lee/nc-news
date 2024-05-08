import propTypes from "prop-types";
import { useFetch } from "../hooks/useFetch";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import CommentCard from "./CommentCard";
import styles from "../css/CommentsList.module.css";

function CommentsList({ article_id }) {
  const { data, isLoading, errorMessage } = useFetch({
    path: `/articles/${article_id}/comments`,
  });

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />;
  }

  return isLoading ? (
    <Loading />
  ) : (
    <section className={styles.commentsList}>
      {data.comments.map((comment) => {
        return <CommentCard key={comment.comment_id} {...comment} />;
      })}
    </section>
  );
}

CommentsList.propTypes = {
  article_id: propTypes.string.isRequired,
};

export default CommentsList;
