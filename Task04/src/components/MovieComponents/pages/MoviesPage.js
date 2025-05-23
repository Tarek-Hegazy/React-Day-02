
import MoviesList from "../views/movieList";
import "./Pages.css";

const MoviesPage = () => {
  return (
    <div className="page">
      <h1>Popular Movies</h1>
      <MoviesList />
    </div>
  );
};

export default MoviesPage;
