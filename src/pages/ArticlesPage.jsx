import ArticlesList from "../components/ArticlesList";
import ArticlesSorter from "../components/ArticlesSorter";
import styles from "../css/ArticlesPage.module.css";

function ArticlesPage() {
  return (
    <section>
      <h2 className={styles.heading}>Articles</h2>
      <ArticlesSorter />
      <ArticlesList />
    </section>
  );
}

export default ArticlesPage;
