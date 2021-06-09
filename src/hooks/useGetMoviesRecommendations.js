import { useState, useEffect } from 'react'
import { getRecommendationsMovie } from '../services/getRecommendationsMovie';


export const useGetMoviesRecommendations = (id) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getRecommendationsMovie(id)
            .then( movies => {
                setState({
                    data: movies,
                    loading: false
                });
            })
    }, [])

    return state; 


}
