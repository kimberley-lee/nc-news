import { convertToRelativeDate } from "../utils/dates";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import styles from "../css/ArticlePage.module.css";
import CommentsList from "../components/CommentsList";
import ArticleVotes from "../components/ArticleVotes";

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
        <img
          className={styles.img}
          src={data.article.article_img_url}
          alt={data.article.title}
        />
        <p className={styles.body}>{data.article.body}</p>
        <ArticleVotes
          article_id={data.article.article_id}
          article_votes={data.article.votes}
        />
      </article>
      <CommentsList article_id={article_id} />
    </>
  );
}

export default ArticlePage;
