import { useState, useEffect } from "react";
import getMovies from "../controllers/movieController";
import MovieItem from "./movieItem";
import NavBar from "./navBar";
import './style.css'
const ShowMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        getMovies()
            .then((data) => {
                setMovies(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (<>
        <NavBar/>
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
        </div>
    </>
        
    );
};

export default ShowMovies;
