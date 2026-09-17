function Navbar({ onNavigate }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <button
          className="logo"
          onClick={() => onNavigate("home")}
        >
          🎬 MovieExplorer
        </button>

        <div className="nav-links">
          <button onClick={() => onNavigate("home")}>
            Home
          </button>

          <button
            className="nav-movie-button"
            onClick={() => onNavigate("movies")}
          >
            Movies
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;