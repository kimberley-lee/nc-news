import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function ArticleCard({ article_id, title }) {
  return (
    <li>
      <Link className="link" to={`articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
    </li>
  );
}

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  article_id: PropTypes.number.isRequired,
};

export default ArticleCard;
