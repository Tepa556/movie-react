import { useParams } from "react-router-dom";
import { IMovie } from "../../shared/OMDBApi/OMDBApi"

interface MovieViews{
    movie:IMovie[]
}
const MoviePage=()=>{
    let { id } = useParams();

    return(
        <>
         <h1>ДАДАЯ!</h1>
        </>
    )
}
export default MoviePage