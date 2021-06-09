import React from 'react';
import { useGetMovies } from '../hooks/useGetMovies';
import { MovieGridItem } from './MovieGridItem';

export const MovieGrid = ({id}) => {

    const { data:movies, loading } = useGetMovies(id);

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