import { Link } from "react-router-dom";
import styles from "../css/Navigation.module.css";
import { useFetch } from "../hooks/useFetch";
import ErrorMessage from "../components/ErrorMessage";

export default function Navigation() {
  const { data, errorMessage } = useFetch({
    path: "/topics",
  });

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />;
  }

  return (
    <nav>
      <h1 className={styles.NCNews}>NC News</h1>
      <Link className={styles.link} to="/">
        Home
      </Link>
      {data?.topics?.map((topic) => {
        return (
          <Link
            to={`/topics/${topic.slug}`}
            className={styles.link}
            key={topic.slug}
          >
            {topic.slug}
          </Link>
        );
      })}
    </nav>
  );
}
