import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ArticlesPage from "./pages/ArticlesPage";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
      </Routes>
    </>
  );
}

export default App;
