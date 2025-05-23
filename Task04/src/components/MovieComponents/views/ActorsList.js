import { useState, useEffect } from "react";
import getActors from "../controllers/actorController";
import ActorItem from "./actorItem";
import "./ActorsList.css";

const ActorsList = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActorsData = async () => {
      try {
        const data = await getActors();
        setActors(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActorsData();
  }, []);

  if (loading) return <div className="loading">Loading actors...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="actors-grid">
      {actors.map((actor) => (
        <ActorItem key={actor.id} actor={actor} />
      ))}
    </div>
  );
};

export default ActorsList;
