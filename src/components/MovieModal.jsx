function MovieModal({ movie, onClose }) {
  if (!movie) {
    return null;
  }

  const image =
    movie.image?.original ||
    movie.image?.medium ||
    "https://via.placeholder.com/800x450?text=No+Image";

  const rating = movie.rating?.average || "N/A";

  const releaseDate = movie.premiered || "N/A";

  const summary = movie.summary
    ? movie.summary.replace(/<[^>]*>/g, "")
    : "No summary available.";

  const genres =
    movie.genres && movie.genres.length > 0
      ? movie.genres.join(", ")
      : "N/A";

  return (
    <div className="modal-overlay">
      <div className="movie-modal">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <img
          src={image}
          alt={`${movie.name} backdrop`}
          className="modal-image"
        />

        <div className="modal-content">
          <h2>{movie.name}</h2>

          <div className="modal-info">
            <span>⭐ Rating: {rating}</span>
            <span>📅 Release: {releaseDate}</span>
          </div>

          <p>
            <strong>Genre:</strong> {genres}
          </p>

          <p>
            <strong>Language:</strong>{" "}
            {movie.language || "N/A"}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {movie.status || "N/A"}
          </p>

          <h3>Overview</h3>

          <p className="summary">
            {summary}
          </p>

          <button
            className="close-button"
            onClick={onClose}
          >
            ❌ Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;