import { useParams } from "react-router-dom";
import { useFetch } from "../../useFetch";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";

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
    <article className="article_page">
      <h1>{data.article.title}</h1>
      <h2>Author: {data.article.author}</h2>
    </article>
  );
}

export default ArticlePage;
