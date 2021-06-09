export const getCharacterMovie = async(id) => {
    const api_key="b768fa61154c344897b81541dad36fa6";
    const url_img="https://www.themoviedb.org/t/p/w220_and_h330_face";
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=es-ES&api_key=${api_key}`;

    const resp = await fetch( url ).
        then(response => response.json()).
        then(data => {
            if(data.cast==undefined){
                return [data];
            }else{
                return data.cast;
            }
        });
    
    const filtro_actores=  resp.filter(actor=>{
        if(actor.known_for_department=="Acting"){
            return actor;
        }
    });

    const actores =  filtro_actores.map( actor => {
        return {
            id:actor.id,
            nombre: actor.name,
            personaje_pelicula: actor.character,
            img_actor:url_img+actor.profile_path
        }
    });
    

    return actores;

}

