import { useState, useEffect } from 'react'
import { getCharacterMovie } from '../services/getCharacterMovie';


export const useGetCharacters = (id) => {
    
    const [state, setState] = useState({
        data: []
    });

    useEffect( () => {
        getCharacterMovie(id)
            .then( actores => {
                setState({
                    data: actores
                });
            })
    }, [])

    return state; 


}
