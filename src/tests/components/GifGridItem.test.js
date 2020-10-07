import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';

import GifGridItem from '../../components/GifGridItem';

describe ('Grupo para testear GifGridItem', ()=> {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    let wrapper = shallow(<GifGridItem title={title} url={url}/>);
    
    // beforeEach ( ()=> {
    //     wrapper = shallow(<GifGridItem title={title} url={url}/>);
    // })

    test('debe renderizar bien el componente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe tener un parrafo con el titulo', () => {

        const p = wrapper.find('p');
        expect (p.text().trim()).toBe(title);

    });

    test('debe tener una imagen igual al url y alt', () => {

        const img = wrapper.find('img');
        // console.log(img.html()); //muestra el tag  entero
        // console.log(img.props()); //muestra el tag  entero
        expect ( img.prop('alt') ).toBe(title);
        expect ( img.prop('src') ).toBe(url);
    });

    test('debe tener un animate__fadeIn', () => {

        const div = wrapper.find('div');
        // console.log(div.props()); //muestra el tag  entero
        //console.log(div.prop('className')); //muestra el tag  entero
        expect ( div.prop('className').includes('animate__fadeIn') ).toBe(true);
        // expect ( img.prop('src') ).toBe(url);
    });

});