import { IMovie } from "../../shared/OMDBApi/OMDBApi"
import { useNavigate } from "react-router-dom"
const MovieCard=(movie:IMovie)=>{
    let navigate=useNavigate();
    function openMoviePage(){
        navigate(`/movie/${movie.imdbID}`)
    }
    return(
        <div className="movie-card" onClick={openMoviePage}>
            <img src={movie.Poster} alt="" className="poster"/>
            <h1>{movie.Title}</h1>
            <p>{movie.Year}</p>
        </div>
    
    )
}

export default MovieCard