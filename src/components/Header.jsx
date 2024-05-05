import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="header">
      <h1>NC News</h1>
      <Link className="link" to="/">
        Home
      </Link>
    </header>
  );
}
