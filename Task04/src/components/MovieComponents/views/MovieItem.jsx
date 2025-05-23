import "./MovieItem.css";

const MovieItem = ({ movie }) => {
    return (
        <div className="movie-card">
            <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title}
                onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/500x750?text=No+Poster';
                }}
            />
            <div className="movie-info">
                <h2>{movie.title}</h2>
                <p className="release-date">
                    Release: <span>{new Date(movie.release_date).toLocaleDateString()}</span>
                </p>
                <p className="rating">
                    Rating: <i>{movie.vote_average.toFixed(1)}/10</i>
                </p>
            </div>
        </div>
    );
};

export default MovieItem;