import React from 'react'
import { MovieGrid } from './components/MovieGrid';
import { Link } from "react-router-dom";

export const MoviesIncApp = () => {
    const flag_fav=(localStorage.getItem("pelicular_favoritas")==null)? false:true;
    return (
        <>
            { flag_fav ==true &&
            <Link className="linkFavoritos" to={`/favorites/`} >Ver Favoritos</Link>
            }
            <h2 className="title-center">Movies Inc - AUNA</h2>
            <hr />
            <MovieGrid id="" />
        </>
    )
}
