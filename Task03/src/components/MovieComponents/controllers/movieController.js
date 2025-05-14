import axios from "axios";
import MovieModel from "../models/movieModel";


const getMovies = async () => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9f2b06b7acbe5fb2e9542c40d91082f1')
        const movies = response.data.results.map((movie) =>
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
    }catch(error){
        console.log(error.message);
        
    }
}

export default getMovies;