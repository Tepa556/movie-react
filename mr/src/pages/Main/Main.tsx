import Feed from "../../component/Feed/Feed"
import Button from "../../component/Search/Button"
import Input from "../../component/Search/Input"
import OMDBApi, { IMovie } from "../../shared/OMDBApi/OMDBApi"
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Main = () => {
    const [search, searchChange] = useState("")
    const [movies,setMovies]=useState<IMovie[]>([]);
    console.log(search);
    const handleSearch=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setMovies((await OMDBApi.searchMovie(search)).Search) 
    }
    console.log(movies)
    const navigate=useNavigate();
    function openFavoritePage(){
        navigate('/favorite/movie')
    }
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
