import { IMovie } from "../../shared/OMDBApi/OMDBApi"
const MovieCard=(movie:IMovie)=>{
    
    return(
        <div>
            <h1>{movie.Title}</h1>
            <p>{movie.Year}</p>
        </div>
    )
}

export default MovieCard