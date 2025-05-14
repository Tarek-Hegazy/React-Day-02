
import "./style.css"
const MovieItem = ({movie})=>{
    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            <h2>{movie.title}</h2>
            {/* <p>{movie.overview}</p> */}
            <p>Release date: <span>{movie.release_date}</span></p>
            <p>Vote: <i>{movie.vote_average}</i></p>
        </div>
    )
}

export default MovieItem;