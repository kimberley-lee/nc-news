import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/ArticleCard.module.css";

function ArticleCard({ article_id, title }) {
  return (
    <li className={styles.ArticleCard}>
      <Link className="link" to={`articles/${article_id}`}>
        <h3 className={styles.ArticleTitle}>{title}</h3>
      </Link>
    </li>
  );
}

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  article_id: PropTypes.number.isRequired,
};

export default ArticleCard;
