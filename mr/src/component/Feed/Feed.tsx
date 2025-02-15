import { IMovie } from "../../shared/OMDBApi/OMDBApi"
import MovieCard from "../MovieCard/MovieCard"
interface MovieParam{
    movies: IMovie[]
}

const Feed = ({movies}:MovieParam) => {
    console.log(`Фильмы: ${movies}`)
    return (
        movies.map((movie) => <MovieCard {...movie}/>)
    )
}
export default Feed
