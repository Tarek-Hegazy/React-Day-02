import "./ActorItem.css";

const ActorItem = ({ actor }) => {
  return (
    <div className="actor-card">
      <img
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
            : "https://via.placeholder.com/500x750?text=No+Image"
        }
        alt={actor.name}
      />
      <div className="actor-info">
        <h3>{actor.name}</h3>
        <p>Department: {actor.known_for_department}</p>
        <p>Popularity: {actor.popularity.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default ActorItem;
