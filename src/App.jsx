import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ArticlesPage from "./pages/ArticlesPage";
import ArticlePage from "./pages/ArticlePage";
import { UserProvider } from "./contexts/User";
import TopicPage from "./components/TopicPage";

function App() {
  return (
    <>
      <UserProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<ArticlesPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route
            path="/articles/:article_id/comments"
            element={<ArticlePage />}
          />
          <Route path="/topics/:topic" element={<TopicPage />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
