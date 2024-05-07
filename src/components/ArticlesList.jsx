import { useFetch } from "../hooks/useFetch";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

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
    <ul>
      {data.articles.map((article) => {
        return <ArticleCard key={article.article_id} {...article} />;
      })}
    </ul>
  );
}
export default ArticlesList;
