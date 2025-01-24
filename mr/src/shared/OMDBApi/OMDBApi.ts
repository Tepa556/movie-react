import axios from "axios";
const BASE_URL="https://www.omdbapi.com/";

const OMDBApiInstance=axios.create({baseURL:BASE_URL});

//const API_KEY=import.meta.env.VITE_API_KEY;
const API_KEY="505480d7";
export interface IMovie{
      Title:string
      Year:number
      imdbID:number
      Type:string
      Poster:string
}

interface ISearchMovieRDO{
       Response:string
       totalResult:string
       Search:IMovie[]
}


const OMDBApi={
    searchMovie:async(title:string)=>{
        const res=await OMDBApiInstance.get<ISearchMovieRDO>("",{
            params:{apikey:API_KEY, s: title},
        });
        //localStorage.setItem('data',data)
        return(res.data)
        //console.log(typeof data)
    },
};
export default OMDBApi;