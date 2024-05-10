import propTypes from "prop-types";
import { useFetch } from "../hooks/useFetch";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";
import styles from "../css/CommentsList.module.css";

function CommentsList({ article_id }) {
  const { data, setData, isLoading, errorMessage } = useFetch({
    path: `/articles/${article_id}/comments`,
  });

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />;
  }

  function addComment(newComment) {
    setData((currData) => {
      return { comments: [newComment, ...currData.comments] };
    });
  }

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <PostComment article_id={article_id} addComment={addComment} />
      <ul className={styles.commentsList}>
        {data.comments.map((comment) => {
          return <CommentCard key={comment.comment_id} {...comment} />;
        })}
      </ul>
    </>
  );
}

CommentsList.propTypes = {
  article_id: propTypes.string.isRequired,
};

export default CommentsList;
