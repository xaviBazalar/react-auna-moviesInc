import { useState, useEffect } from 'react'
import { getMovies } from '../services/getMovies';


export const useFavoriteMovies = (id,action) => {
    
    const [state, setState] = useState({
        data: []
    });
    
    useEffect( () => {
        if(action=="add"){
            getMovies(id)
            .then( movies => {
                setState({
                    data: movies
                });
            })
        }  
    }, [id])

    return state; 


}