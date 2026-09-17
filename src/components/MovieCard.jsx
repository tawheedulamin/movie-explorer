function MovieCard({ movie, onDetails }) {
  const poster =
    movie.image?.medium ||
    "https://via.placeholder.com/300x450?text=No+Poster";

  const releaseDate = movie.premiered
    ? movie.premiered.substring(0, 4)
    : "N/A";

  const rating = movie.rating?.average
    ? movie.rating.average
    : "N/A";

  return (
    <div className="movie-card">
      <img
        src={poster}
        alt={`${movie.name} poster`}
        className="movie-poster"
      />

      <div className="movie-card-content">
        <h3>{movie.name}</h3>

        <div className="movie-info">
          <span>⭐ {rating}</span>
          <span>•</span>
          <span>📅 {releaseDate}</span>
        </div>

        <button
          className="details-button"
          onClick={() => onDetails(movie)}
        >
          See Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;