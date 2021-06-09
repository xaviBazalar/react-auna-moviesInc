import { useState, useEffect } from 'react'
import { getMovies } from '../services/getMovies';


export const useGetMovies = (id) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getMovies(id)
            .then( movies => {
                setState({
                    data: movies,
                    loading: false
                });
            })
    }, [])

    return state; 


}
