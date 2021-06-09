import React from 'react'
import { useParams ,Link} from 'react-router-dom'
import { MovieGridRecommendations } from '../../components/MovieGridRecommendations';


export const RecommendationsMovieView = () => {
    
    const params = useParams();
    const flag_fav=(localStorage.getItem("pelicular_favoritas")==null)? false:true;

    return (
        <>
            { flag_fav ==true &&
            <Link className="linkFavoritos" to={`/favorites/`} >Ver Favoritos</Link>
            }
            <h2 className="title-center">Movies Inc - AUNA - Peliculas Similares - <Link className="link-route" to={`/`}>Regresar a la Lista</Link></h2>
            <hr />
            <MovieGridRecommendations id={params.id} />
        </>
    )
}