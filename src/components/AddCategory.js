import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue ( e.target.value );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (  !inputValue.trim().length > 0 ) {
            return;
        }

        setCategory ( cats => [inputValue,...cats] );
        setInputValue ('');

    };

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}



