export const setRatingMovie = async(id,rating) => {

    const api_key="b768fa61154c344897b81541dad36fa6";
    
    const url_session=`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${api_key}`;
    const resp_session = await fetch( url_session ).
        then(response => response.json()).
        then(data => data);

    const guest_session=resp_session.guest_session_id;

    const data={"value": parseInt(rating)}
    const url = `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${api_key}&guest_session_id=${guest_session}`;
    const resp = await fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json());

}