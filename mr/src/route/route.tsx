import {Routes,Route} from 'react-router-dom';
import Main from '../pages/Main/Main';
import MoviePage from '../pages/MoviePage/MoviePage';
import FavoriteMovie from '../pages/FavoriteMovie/FavoriteMovie';

const AppRoutes=()=>{
     return(
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movie/:id" element={<MoviePage />} />
            <Route path='/favorite/movie' element={<FavoriteMovie />} />
        </Routes>
     )
}
export default AppRoutes;