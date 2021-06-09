export const getRecommendationsMovie = async(id) => {
    const api_key="b768fa61154c344897b81541dad36fa6";
    const url_img="https://www.themoviedb.org/t/p/w220_and_h330_face";
    const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=es-ES&page=1&api_key=${api_key}`;

    const resp = await fetch( url ).
        then(response => response.json()).
        then(data => data.results);
    

    const total=resp.length;

    const peliculas = resp.map( movie => {
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
