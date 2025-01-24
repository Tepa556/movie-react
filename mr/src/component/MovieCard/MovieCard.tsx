import { IMovie } from "../../shared/OMDBApi/OMDBApi";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';

const MovieCard = (movie: IMovie) => {
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    useEffect(() => {
        const savedFavorites = localStorage.getItem('favoriteFilms');
        if (savedFavorites) {
            const favoritesArray = JSON.parse(savedFavorites);
            setIsFavorite(favoritesArray.includes(movie.imdbID));
        }
    }, [movie.imdbID]);

    function openMoviePage() {
        navigate(`/movie/${movie.imdbID}`);
    }

    function addFavoriteFilm() {
        setIsFavorite(true);
        updateFavorites(true);
    }

    function removeFavoriteFilm() {
        setIsFavorite(false);
        updateFavorites(false);
    }

    function updateFavorites(isAdding: boolean) {
        const savedFavorites = localStorage.getItem('favoriteFilms');
        let favoritesArray: string[] = savedFavorites ? JSON.parse(savedFavorites) : [];
    
        if (isAdding) {
            if (!favoritesArray.includes(movie.imdbID.toString())) {
                favoritesArray.push(movie.imdbID.toString());
            }
        } else {
            favoritesArray = favoritesArray.filter((id: string) => id !== movie.imdbID.toString());
        }
    
        localStorage.setItem('favoriteFilms', JSON.stringify(favoritesArray));
    }
    useEffect(()=>{
        const favotiteFilms=localStorage.getItem('favoriteFilms')
        console.log(JSON.stringify(favotiteFilms))
    },[])
    return (
        <div className="movie-card" key={movie.imdbID}>
            <img src={movie.Poster} alt="" className="poster" />
            <h1>{movie.Title}</h1>
            <p>{movie.Year}</p>
            {isFavorite ? 
                <>
                    <FavoriteIcon className="favorite-active" onClick={removeFavoriteFilm} />
                </> :
                <>
                    <FavoriteIcon className="favorite-default" onClick={addFavoriteFilm} />
                </>
            }
            <button className="more-info-button" onClick={openMoviePage}>Подробнее</button>
        </div>
    );
}

export default MovieCard;
