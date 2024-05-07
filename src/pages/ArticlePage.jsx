import { convertToRelativeDate } from "../utils/dates";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import styles from "../css/ArticlePage.module.css";

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
    <article className={styles.ArticlePage}>
      <h1>{data.article.title}</h1>
      <h2>Written by {data.article.author}</h2>
      <h3>Topic: {data.article.topic}</h3>
      <p>Submitted {convertToRelativeDate(data.article.created_at)}</p>
      <img src={data.article.article_img_url} />
      <p>{data.article.body}</p>
    </article>
  );
}

export default ArticlePage;
