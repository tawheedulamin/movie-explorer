import { useState } from "react";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {
  const [currentPage, setCurrentPage] = useState(
    window.location.pathname === "/movies" ? "movies" : "home"
  );

  const goToPage = (page) => {
    if (page === "movies") {
      window.history.pushState({}, "", "/movies");
      setCurrentPage("movies");
    } else {
      window.history.pushState({}, "", "/");
      setCurrentPage("home");
    }

    window.scrollTo(0, 0);
  };

  return (
    <>
      {currentPage === "home" ? (
        <Home onNavigate={goToPage} />
      ) : (
        <Movies onNavigate={goToPage} />
      )}
    </>
  );
}

export default App;