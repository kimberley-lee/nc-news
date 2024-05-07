import ArticlesList from "../components/ArticlesList";
import styles from "../css/ArticlesPage.module.css";

function ArticlesPage() {
  return (
    <section>
      <h2 className={styles.heading}>Articles</h2>
      <ArticlesList />
    </section>
  );
}

export default ArticlesPage;
