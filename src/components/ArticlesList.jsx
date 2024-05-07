import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import ArticleCard from "./ArticleCard";
import styles from "../css/ArticlesList.module.css";

function ArticlesList() {
  const { data, isLoading, errorMessage } = useFetch({
    path: "/articles?limit=38",
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
