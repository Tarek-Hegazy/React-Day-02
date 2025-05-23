
import ActorsList from "../views/ActorsList";
import "./Pages.css";

const ActorsPage = () => {
  return (
    <div className="page">
      <h1>Popular Actors</h1>
      <ActorsList />
    </div>
  );
};

export default ActorsPage;
