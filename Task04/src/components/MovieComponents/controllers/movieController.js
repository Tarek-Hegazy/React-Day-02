import axios from "axios";
import MovieModel from "../models/movieModel";

// const BASE_URL = "https://api.themoviedb.org/3";
// const API_KEY = "9f2b06b7acbe5fb2e9542c40d91082f1";

const getMovies = async () => {
  try {
    const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=9f2b06b7acbe5fb2e9542c40d91082f1");
    const movies = response.data.results.map(
      (movie) =>
        new MovieModel(
          movie.id,
          movie.title,
          movie.overview,
          movie.release_date,
          movie.vote_average,
          movie.poster_path
        )
    );
    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error.message);
  }
};

export default getMovies;
