import axios from "axios";
import TvModel from "../models/tvModel";

const getTvShows = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=9f2b06b7acbe5fb2e9542c40d91082f1"
    );
    const tvShows = response.data.results.map(
      (tvShow) =>
        new TvModel(
          tvShow.id,
          tvShow.name,
          tvShow.poster_path,
          tvShow.first_air_date,
          tvShow.popularity
        )
    );
    return tvShows;
  } catch (error) {
    console.error("Error fetching actors:", error.message);
    throw error;
  }
};

export default getTvShows;
