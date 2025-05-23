import { useState, useEffect } from "react";
import getMovies from "../controllers/movieController";
import MovieItem from "./MovieItem";
import "./MoviesList.css";

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMoviesData = async () => {
            try {
                const data = await getMovies();
                setMovies(data);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMoviesData();
    }, []);

    if (loading) return <div className="loading">Loading movies...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MoviesList;