import { NavLink } from "react-router-dom";
import logo from "../images/nc-news-high-resolution-logo-transparent.svg";
import styles from "../css/Navigation.module.css";
import { useFetch } from "../hooks/useFetch";
import ErrorMessage from "../components/ErrorMessage";
import { toUppercase } from "../utils/toUppercase";

export default function Navigation() {
  const { data, errorMessage } = useFetch({
    path: "/topics",
  });

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />;
  }

  const activeState = ({ isActive }) => {
    return {
      color: isActive ? "black" : "gray",
      fontWeight: isActive ? "bold" : "",
    };
  };

  return (
    <>
      <img className={styles.logo} src={logo} alt="logo" />
      <nav id={styles.nav}>
        <NavLink
          id={styles.link}
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
          style={activeState}
        >
          Home
        </NavLink>
        {data?.topics?.map((topic) => {
          return (
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={`/topics/${topic.slug}`}
              key={topic.slug}
              style={activeState}
            >
              {toUppercase(topic.slug)}
            </NavLink>
          );
        })}
      </nav>
    </>
  );
}
