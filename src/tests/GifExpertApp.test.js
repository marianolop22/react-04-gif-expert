import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from "../GifExpertApp";

describe ('Pruebas de GifExpertApp', ()=> {

    
    test('debe renderizar el GifExpertApp', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar una lista de categorias', () => {

        const categories = ['One Punch', 'Saamurai Jack'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        wrapper.find('GifGrid')
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });


});