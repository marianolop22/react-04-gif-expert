import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {
/* 
    const [images, setImages] = useState([]);

    useEffect( ()=> {
        getGifs(category)
            .then( images => {
                setImages(images);
            })
    }, [category]); //al estar vacío, no se vuelve a llamar la funcion, al poner algo, esto se ejecuta cada vez que se modifica
 */

    const { data:images, loading} = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeIn" style={{margin: 10+'px'}}>{category}</h3>
            {loading && <p>Loading....</p>}
            <div className="card-grid">
                    {
                        images.map ( (img) => <GifGridItem 
                            key={img.id} 
                            {...img} 
                        /> )
                    }
            </div>
        </>
    )
}

export default GifGrid
