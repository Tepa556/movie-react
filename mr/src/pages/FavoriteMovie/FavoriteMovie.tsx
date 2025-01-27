import { useEffect, useState } from "react";
import MovieCard from "../../component/MovieCard/MovieCard";

const FavoriteMoviesList = () => {
    const [favoriteFilms, setFavoriteFilms] = useState<string[]>([]);

    useEffect(() => {
        const savedFavorites = localStorage.getItem('favoriteFilms');
        if (savedFavorites) {
            const favoritesArray = JSON.parse(savedFavorites);
            setFavoriteFilms(favoritesArray);
        }
    }, []);

    return (
        <div className="favorite-movies-list">
    
        </div>
    );
}

export default FavoriteMoviesList;
