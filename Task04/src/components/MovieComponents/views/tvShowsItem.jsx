import "./tvShowsItem.css";

const TvShowsItem = ({ tvShow }) => {
    // التحقق من وجود tvShow وخصائصه الأساسية
    if (!tvShow || !tvShow.poster_path || !tvShow.name) {
        return (
            <div className="tv-show-item error">
                <img 
                    src="https://via.placeholder.com/500x750?text=No+Data"
                    alt="Invalid TV show data"
                />
                <div className="tv-show-info">
                    <h2>Invalid TV Show Data</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="tv-show-item">
            <img
                src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
                alt={tvShow.name}
                onError={(e) => {
                    e.target.src = "https://via.placeholder.com/500x750?text=No+Poster";
                }}
            />
            <div className="tv-show-info">
                <h2>{tvShow.name}</h2>
                {tvShow.first_air_date && (
                    <p className="release-date">
                        First Air: <span>{new Date(tvShow.first_air_date).toLocaleDateString()}</span>
                    </p>
                )}
                {tvShow.popularity && (
                    <p className="popularity">
                        Popularity: <i>{tvShow.popularity.toFixed(1)}</i>
                    </p>
                )}
            </div>
        </div>
    );
};

export default TvShowsItem;