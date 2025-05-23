import { useState, useEffect } from "react";
import TvShowsItem from "./tvShowsItem";
import getTvShows from "../controllers/tvController";
import "./tvShowsList.css";

const TvShowsList = () => {
    const [tvShows, setTvShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTvShowsData = async () => {
            try {
                const data = await getTvShows();
            
                const validTvShows = data.filter(tvShow => 
                    tvShow && tvShow.poster_path && tvShow.name
                );
                
                setTvShows(validTvShows);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTvShowsData();
    }, []);

    if (loading) return <div className="loading">Loading TV shows...</div>;
    if (error) return <div className="error">Error: {error}</div>;
    if (tvShows.length === 0) return <div className="no-results">No TV shows found</div>;

    return (
        <div className="tv-shows-grid">
            {tvShows.map((tvShow) => (
                <TvShowsItem key={tvShow.id} tvShow={tvShow} />
            ))}
        </div>
    );
};

export default TvShowsList;