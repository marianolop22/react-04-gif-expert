import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( ()=> {

        getGifs( category )
            .then( images => {
                setState ({
                    data: images,
                    loading: false
                });
            })

    }, [category]); //al estar vacío, no se vuelve a llamar la funcion, al poner algo, esto se ejecuta cada vez que se modifica



    return state;

};