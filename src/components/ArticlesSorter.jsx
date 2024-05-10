import { useSearchParams } from "react-router-dom";
import styles from "../css/ArticlesSorter.module.css";

function ArticlesSorter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortQuery = searchParams.get("sort_by") ?? "created_at";

  function handleChange(e) {
    setSearchParams({ sort_by: e.target.value });
  }

  return (
    <>
      <label className={styles.label}>
        Sort by:
        <select
          className={styles.select}
          value={sortQuery}
          onChange={handleChange}
        >
          <option value="created_at">📆 Newest</option>
          <option value="votes">🔥 Hottest</option>
          <option value="comment_count">💬 Most Popular</option>
        </select>
      </label>
    </>
  );
}

export default ArticlesSorter;
