import ArticlesList from "../components/ArticlesList";
import ArticlesSorter from "../components/ArticlesSorter";
import styles from "../css/ArticlesPage.module.css";

function ArticlesPage() {
  return (
    <section>
      <h3 className={styles.heading}>Articles</h3>
      <ArticlesSorter />
      <ArticlesList />
    </section>
  );
}

export default ArticlesPage;
