import axios from "axios";
import ActorModel from "../models/actorModels";

// const BASE_URL = "https://api.themoviedb.org/3";
// const API_KEY = "9f2b06b7acbe5fb2e9542c40d91082f1";

const getActors = async () => {
  try {
    const response = await axios.get("https://api.themoviedb.org/3/person/popular?api_key=9f2b06b7acbe5fb2e9542c40d91082f1");
    const actors = response.data.results.map(
      (actor) =>
        new ActorModel(
          actor.id,
          actor.name,
          actor.profile_path,
          actor.known_for_department,
          actor.popularity
        )
    );
    return actors;
  } catch (error) {
    console.error("Error fetching actors:", error.message);
    throw error;
  }
};

export default getActors;
