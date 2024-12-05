import {Routes,Route} from 'react-router-dom';
import Main from '../pages/Main/Main';
import MoviePage from '../pages/MoviePage/MoviePage';

const AppRoutes=()=>{
     return(
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movie" element={<MoviePage />} />
        </Routes>
     )
}
export default AppRoutes;