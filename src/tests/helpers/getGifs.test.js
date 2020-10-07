import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';

import { getGifs } from "../../helpers/getGifs";

describe ('Prueba con getGifs fetch', ()=> {

    test('debe de traer 10 elementos', async() => {

        const gifs = await getGifs ('One Punch');
        expect( gifs.length ).toBe(10);
    });

    test('debe de traer un arrya vacío', async() => {
        const gifs = await getGifs ('');
        console.log(gifs);
        expect( gifs.length ).toBe(0);
    });

});