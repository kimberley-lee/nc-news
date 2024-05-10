import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import ArticleCard from "./ArticleCard";
import styles from "../css/ArticlesList.module.css";
import { useParams, useSearchParams } from "react-router-dom";
import Card from "./Card";

function ArticlesList() {
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const sortQuery = searchParams.get("sort_by") ?? "created_at";

  let requestPath;
  if (topic) {
    requestPath = `/articles?limit=100&topic=${topic}&sort_by=${sortQuery}`;
  } else {
    requestPath = `/articles?limit=100&sort_by=${sortQuery}`;
  }

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
