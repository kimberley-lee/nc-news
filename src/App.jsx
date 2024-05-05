import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ArticlesPage from "./pages/ArticlesPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesPage />} />
      </Routes>
    </>
  );
}

export default App;
