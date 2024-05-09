import { useParams } from "react-router-dom";
import ArticlesList from "./ArticlesList";
import { toUppercase } from "../utils/toUppercase";
import styles from "../css/TopicPage.module.css";

function TopicPage() {
  const { topic } = useParams();

  return (
    <>
      <h2 className={styles.title}>{toUppercase(topic)}</h2>
      <ArticlesList />;
    </>
  );
}

export default TopicPage;
