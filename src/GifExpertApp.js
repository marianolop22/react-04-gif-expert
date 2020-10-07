import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

// import PropTypes from 'prop-types'

const GifExpertApp = ( {defaultCategories = []} ) => {

    // const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={setCategories}/>
            <hr/>
            {/* <button onClick={ handleAdd } >Agregar</button> */}
            <ol>
                {
                    categories.map( (category, index) => 
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    );
};

GifExpertApp.propTypes = {
}

export default GifExpertApp
