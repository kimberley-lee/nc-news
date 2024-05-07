import { convertToRelativeDate } from "../utils/dates";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import styles from "../css/ArticlePage.module.css";
import CommentsList from "../components/CommentsList";

function ArticlePage() {
  const { article_id } = useParams();

  const { data, isLoading, errorMessage } = useFetch({
    path: `/articles/${article_id}`,
  });

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />;
  }

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <article className={styles.Article}>
        <h1 className={styles.title}>{data.article.title}</h1>
        <h2>Posted by {data.article.author}</h2>
        <h3>Topic: {data.article.topic}</h3>
        <p>Submitted {convertToRelativeDate(data.article.created_at)}</p>
        <img className={styles.img} src={data.article.article_img_url} />
        <p className={styles.body}>{data.article.body}</p>
      </article>
      <CommentsList article_id={article_id} />
    </>
  );
}

export default ArticlePage;
