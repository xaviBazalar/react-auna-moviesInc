import React from 'react'
import { Link } from "react-router-dom";
import { useGetCharacters } from '../hooks/useGetCharacters';
import { getRecommendationsMovie } from '../services/getRecommendationsMovie';
import { setRatingMovie } from '../services/setRatingMovie';

export const MovieListCharacter = ({ id }) => {
    const { data:actores } = useGetCharacters(id);
    const idMovie=id;
    const ratings=[1,2,3,4,5,6,7,8,9,10];
    
    const votarRatingMovie=(e)=>{
        let rating=e.target.id;
        setRatingMovie(idMovie,rating);
        alert("Califico la pelicula de manera exitosa!");
        
    }

    return (
        <>
            <ol className="listActores">
            {
                actores.map( actor => (
                    <li key={ actor.id }>
                        <span>
                            Actor/Actriz:{ actor.nombre } | Personaje:{ actor.personaje_pelicula }
                        </span>
                    </li>
                ))
            }
            </ol>
            <h5>Votar:</h5>
            <div className="boxRating">
                {ratings.map(rating => 
                    <span key={rating} id={rating} onClick={votarRatingMovie} className="fa fa-star"></span>
                )}
            </div>
            <Link className="link-route" to={`/`}>Regresar</Link>
            <Link className="link-route" to={`/movie/recommendations/${id}`}>Ver Peliculas Similares</Link>
        </>
    )
}

