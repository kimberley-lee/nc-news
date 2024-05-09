import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import ArticleCard from "./ArticleCard";
import styles from "../css/ArticlesList.module.css";
import { useParams } from "react-router-dom";

function ArticlesList() {
  const { topic } = useParams();

  const requestPath = topic
    ? `/articles?limit=100&topic=${topic}`
    : "/articles?limit=100";

  const { data, isLoading, errorMessage } = useFetch({
    path: requestPath,
  });

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />;
  }

  return isLoading ? (
    <Loading />
  ) : (
    <ul className={styles.list}>
      {data.articles.map((article) => {
        return <ArticleCard key={article.article_id} {...article} />;
      })}
    </ul>
  );
}

export default ArticlesList;
