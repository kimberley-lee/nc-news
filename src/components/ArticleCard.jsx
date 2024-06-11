import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { convertToRelativeDate } from "../utils/dates";
import styles from "../css/ArticleCard.module.css";
import Card from "./Card";

function ArticleCard({ article_id, title, author, created_at, topic }) {
  return (
    <Card>
      <Link className="link" to={`articles/${article_id}`}>
        <h3 className={styles.ArticleTitle}>{title}</h3>
      </Link>
      <p className={styles.authorDate}>
        posted by {author} {convertToRelativeDate(created_at)} about {topic}
      </p>
    </Card>
  );
}

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  article_id: PropTypes.number.isRequired,
  topic: PropTypes.string.isRequired,
};

export default ArticleCard;
