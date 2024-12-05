import Feed from "../../component/Feed/Feed"
import Button from "../../component/Search/Button"
import Input from "../../component/Search/Input"
import OMDBApi, { IMovie } from "../../shared/OMDBApi/OMDBApi"
import { useState } from "react"
const Main = () => {
    const [search, searchChange] = useState("")
    const [movies,setMovies]=useState<IMovie[]>([]);
    console.log(search);
    const handleSearch=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setMovies((await OMDBApi.searchMovie(search)).Search) 
    }
    console.log(movies)
    return (
        <>
        <form onSubmit={handleSearch} className="">
            <Input value={search} onChange={searchChange} />
            <Button />
        </form> 
        <div>
            <Feed movies={movies}/>
        </div>       
        </>
    )
}
export default Main
