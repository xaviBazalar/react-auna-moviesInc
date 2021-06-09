export const getMovies = async(id) => {
    const api_key="b768fa61154c344897b81541dad36fa6";
    const url_img="https://www.themoviedb.org/t/p/w220_and_h330_face";
    let url = `https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1&api_key=${api_key}`;

    if(id!==""){
        url = `https://api.themoviedb.org/3/movie/${id}?language=es-ES&api_key=${api_key}`;
    }

    const resp = await fetch( url ).
        then(response => response.json()).
        then(data => {
            if(data.results==undefined){
                return [data];
            }else{
                return data.results;
            }
        });
 
    const peliculas_ordenar= await resp.sort(function(a, b) {
            let titleA = a.title.toUpperCase(); // ignore upper and lowercase
            let titleB = b.title.toUpperCase(); // ignore upper and lowercase
            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }
            
            // son iguales
            return 0;
        });
    
    const total=peliculas_ordenar.length;

    const peliculas = peliculas_ordenar.map( movie => {
        return {
            id:movie.id,
            titulo_pelicula: movie.title,
            fecha_estreno: movie.release_date,
            media_votos: movie.vote_average,
            cartel_pelicula:url_img+movie.poster_path,
            cantidad:total
        }
    });

    return peliculas;

}

