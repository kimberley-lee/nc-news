import { useParams } from "react-router-dom";
import ArticlesList from "../components/ArticlesList";
import { toUppercase } from "../utils/toUppercase";
import styles from "../css/TopicPage.module.css";
import ArticlesSorter from "../components/ArticlesSorter";


function TopicPage() {
  const { topic } = useParams();

  return (
    <>
      <h2 className={styles.title}>{toUppercase(topic)}</h2>
      <ArticlesSorter />
      <ArticlesList />;
    </>
  );
}

export default TopicPage;
