import TvShowsList from "../views/tvShowsList";
import "./Pages.css";
import "./TvShowsPage.css"

const TvShowsPage = () => {
    return (
        <div className="page">
        <h1>Tv Shows</h1>
        <TvShowsList />
        </div>
    );
};

export default TvShowsPage;
