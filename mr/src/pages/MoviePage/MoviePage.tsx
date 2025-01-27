import { useParams } from "react-router-dom";
import { useEffect } from "react";

interface Params {
    id: string;
}

const MoviePage=()=>{
    const { id }:Params= useParams();
    useEffect(()=>{
        let getMovieArray=localStorage.getItem('movieArray')
        console.log(typeof(getMovieArray))
        const filterById = (id) => {
            return movies.filter(movie => movie.imdbID === id);
        }
    }) 
    return(
        <>
         <h1>ДАДАЯ!</h1>
        </>
    )
}
export default MoviePage