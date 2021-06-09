import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { MovieGrid } from '../../components/MovieGrid'


export const DetailMovieView = () => {
    
    const params = useParams();
    const flag_fav=(localStorage.getItem("pelicular_favoritas")==null)? false:true;
    return (
        <>
            { flag_fav ==true &&
            <Link className="linkFavoritos" to={`/favorites/`} >Ver Favoritos</Link>
            }
            <h2 className="title-center">Movies Inc - AUNA</h2>
            <hr />
            <MovieGrid id={params.id} />
        </>
    )
}
