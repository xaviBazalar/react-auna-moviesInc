import React from 'react';
import { useGetMoviesRecommendations } from '../hooks/useGetMoviesRecommendations';
import { MovieGridItem } from './MovieGridItem';

export const MovieGridRecommendations = ({id}) => {

    const { data:movies, loading } = useGetMoviesRecommendations(id);

    return (
        <>
            { loading && <p className="">Cargando..</p> }

            <div className="card-grid">
                
                {
                    movies.map( movie => (
                        <MovieGridItem 
                            key={ movie.id }
                            id={movie.id}
                            titulo={movie.titulo_pelicula}
                            url_img={movie.cartel_pelicula}
                            fec_estreno={movie.fecha_estreno}
                            media_votos={movie.media_votos}
                            total={movie.cantidad}
                            favorito={false}
                        />
                    ))
                }
            
            </div>
        </>
    )
}