import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

function Movies({ onNavigate }) {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchShows();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim() === "") {
        fetchShows();
      } else {
        searchShows(searchQuery);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  async function fetchShows() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://api.tvmaze.com/shows"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch shows.");
      }

      const data = await response.json();

      setMovies(data);
    } catch (error) {
      setError("Unable to load movies. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function searchShows(query) {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
          query
        )}`
      );

      if (!response.ok) {
        throw new Error("Search failed.");
      }

      const data = await response.json();

      const shows = data.map((item) => item.show);

      setMovies(shows);
    } catch (error) {
      setError("Unable to search movies. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <Navbar onNavigate={onNavigate} />

      <main className="movies-page">
        <div className="movies-header">
          <p className="section-label">
            MOVIE EXPLORER
          </p>

          <h1>Explore Movies & Shows</h1>

          <p>
            Search for your favorite movies and discover
            something new.
          </p>
        </div>

        <div className="search-container">
          <span className="search-icon">🔍</span>

          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchQuery}
            onChange={(event) =>
              setSearchQuery(event.target.value)
            }
          />
        </div>

        {loading && (
          <div className="message">
            <p>Loading movies...</p>
          </div>
        )}

        {error && (
          <div className="message error-message">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && movies.length === 0 && (
          <div className="message">
            <p>No movies found.</p>
          </div>
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onDetails={setSelectedMovie}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </div>
  );
}

export default Movies;