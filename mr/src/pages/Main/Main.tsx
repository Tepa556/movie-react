import Feed from "../../component/Feed/Feed"
import Button from "../../component/Search/Button"
import Input from "../../component/Search/Input"
import OMDBApi, { IMovie } from "../../shared/OMDBApi/OMDBApi"
<<<<<<< HEAD
import { useState,useEffect } from "react"
=======
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
>>>>>>> f44745cd57a5136f68f88dd85709d244c142bebb
const Main = () => {
    const [search, searchChange] = useState("")
    const [movies,setMovies]=useState<IMovie[]>([]);
    console.log(search);
    const handleSearch=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setMovies((await OMDBApi.searchMovie(search)).Search) 
    }
<<<<<<< HEAD
    useEffect(()=>{

        /*console.log(movies)*/
        localStorage.setItem("movieArray",JSON.stringify(movies))
        let getMovieArray=localStorage.getItem('movieArray')
        console.log(getMovieArray)
    })
=======
    console.log(movies)
    const navigate=useNavigate();
    function openFavoritePage(){
        navigate('/favorite/movie')
    }
>>>>>>> f44745cd57a5136f68f88dd85709d244c142bebb
    return (
        <>
        <div className="main-container">
        <form onSubmit={handleSearch} className="search-input">
            <Input value={search} onChange={searchChange} />
            <Button />
        </form> 
        <FavoriteIcon onClick={openFavoritePage} className="favorite-movie" /> 
        </div>
        <div>
            <Feed movies={movies}/>
        </div>       
        </>
    )
}
export default Main
