import { IMovie } from "../../shared/OMDBApi/OMDBApi"
import { useNavigate } from "react-router-dom"
import React, { useState } from "react"
import FavoriteIcon from '@mui/icons-material/Favorite'
const MovieCard=(movie:IMovie)=>{
    const [favoriteFilm,setFavoriteFilm]=useState(()=>{
        const savedState=localStorage.getItem('favoriteFilm')
        return savedState ? JSON.parse(savedState) : false
    })
    let favoriteFimsArray=[];//Массив для записи в localstorage с id фильма и состояния его лайка 
    let navigate=useNavigate();
    localStorage.setItem('favoriteFilm',JSON.stringify(favoriteFilm))
    //console.log(localStorage.getItem('favoriteFilm'))
    function openMoviePage(){
        navigate(`/movie/${movie.imdbID}`)
    }
    function addFavoriteFilm(e:React.MouseEvent<SVGSVGElement>){
        setFavoriteFilm(true)
        console.log(e.currentTarget.closest('.movie-card'))
    }
    function removeFavoriteFilm(e:React.MouseEvent<SVGSVGElement>){
        setFavoriteFilm(false)
        console.log(e.currentTarget.closest('.movie-card'))
    }
    return(
        <div className="movie-card" key={movie.imdbID}>
            <img src={movie.Poster} alt="" className="poster"/>
            <h1>{movie.Title}</h1>
            <p>{movie.Year}</p>
            {favoriteFilm==false ?
            <FavoriteIcon className="favorite-default" onClick={addFavoriteFilm} /> :
            <FavoriteIcon className="favorite-active" onClick={removeFavoriteFilm} />
            }
        </div>
    
    )
}

export default MovieCard