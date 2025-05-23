import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to MovieDB by Tarek</h1>
      <p>Discover the best movies, TV shows, and actors</p>

      <div className="quick-links">
        <Link to="/movies" className="quick-link">
          Browse Movies
        </Link>
        <Link to="/tv-shows" className="quick-link">
          Browse TV Shows
        </Link>
        <Link to="/actors" className="quick-link">
          Browse Actors
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
