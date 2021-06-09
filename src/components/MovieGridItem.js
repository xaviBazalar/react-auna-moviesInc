import React from 'react'
import { Link } from "react-router-dom";
import { getMovies } from '../services/getMovies';
import { MovieListCharacter } from './MovieListCharacter';



export const MovieGridItem = ({ id,titulo, url_img, fec_estreno, media_votos,total,favorito }) => {
    
    
    const AddFavoriteMovie= (e) =>{
        let id=e.target.id;
        getMovies(id).then( movies => {
            
            let movieFavorite="";
            if(localStorage.getItem("pelicular_favoritas")==""){
                movieFavorite=JSON.stringify(movies);
            }else{
                movieFavorite=localStorage.getItem("pelicular_favoritas")+","+JSON.stringify(movies);
            }
            
            localStorage.setItem("pelicular_favoritas",movieFavorite);
            alert("Pelicula Agregada a Favoritos!");
            window.location.reload(); 
        })   
    }

    

    return (
        <div className="card">
            <img src={ url_img } alt={ titulo } />
            <h4>{ titulo } </h4>
            <p>{ fec_estreno }</p>
            <p>Votación:{ media_votos }</p>

            { favorito ==false &&
                <button className="btnFav" id={id} onClick={AddFavoriteMovie}>Agregar a Favoritos</button>
            }   

            { total > 1 &&
                <Link to={`/movie/${id}`}>Ver Detalles</Link>
            }

            { total == 1 &&
                <MovieListCharacter key={id} id={id}/>
            }
        </div>
    )
}