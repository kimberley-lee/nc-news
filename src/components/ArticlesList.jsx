import { useFetch } from "../../useFetch";
import ArticleCard from "./ArticleCard";

function ArticlesList() {
  const { data } = useFetch({ path: "/articles" });

  return (
    <ul>
      {data.articles.map((article) => {
        return <ArticleCard key={article.article_id} {...article} />;
      })}
    </ul>
  );
}
export default ArticlesList;
