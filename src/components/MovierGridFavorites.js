import React from 'react';
import { MovieGridItem } from './MovieGridItem';

export const MovieGridFavorites = () => {

    const movies = ()=>{
            let lista=[];
            let listaFavoritos=localStorage.getItem("pelicular_favoritas"); 
            listaFavoritos=listaFavoritos.replace("null,","");
            
            let datos_fav;
            if(listaFavoritos.indexOf("],[")<=-1){
                datos_fav=[listaFavoritos.replace("[","").replace("]","")];
            }else{
                datos_fav=listaFavoritos.split("],[");
            }

            let total=datos_fav.length;

            const fav_unicos = datos_fav.reduce( (accArr, valor) => {
                if(total>1){
                    valor=valor.replace("[","");
                    valor=valor.replace("]","");
                }

                if (accArr.indexOf(valor) < 0) {
                  accArr.push(valor);
                }
                return accArr;
            }, []);

            fav_unicos.map(movie=>{
                if(total>1){
                    movie=movie.replace("[","");
                    movie=movie.replace("]","");
                }
                lista.push(JSON.parse(movie));
                
            })

            return lista;
    }

    const pelicular_favoritas=movies();
    

    return (
        <>
            <div className="card-grid">
                
            {
                    pelicular_favoritas.map( movie => (
                        <MovieGridItem 
                            key={ movie.id }
                            id={movie.id}
                            titulo={movie.titulo_pelicula}
                            url_img={movie.cartel_pelicula}
                            fec_estreno={movie.fecha_estreno}
                            media_votos={movie.media_votos}
                            total={movie.cantidad}
                            favorito={true}
                        />
                    ))
                }    
            </div>
        </>
    )
}
