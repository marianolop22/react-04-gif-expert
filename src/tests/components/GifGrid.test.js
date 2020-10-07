import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); //voy a simular cualquier llamada a ese archivo

describe ('Pruebas del componente GifGrid', ()=> {

    const category = 'One Punch';
    
    test('debe renderizar el GifGrid', () => {

        //simulamos la llamada al usefetch y retorna estos valores
        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const imgs = [
            {
                id: 'ABC',
                url: 'https://localhost/cualquiercosaaa/.jpg',
                title: 'un titulo'
            },
            {
                id: 'ABD',
                url: 'https://localhost/cualquiercosaaa/.jpg',
                title: 'un titulo'
            }
        ];

        useFetchGifs.mockReturnValue({
            data: imgs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect( wrapper.find('p').exists()).toBe(false); //aca verifico que no exista un parrafo de lo ading
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGridItem').length).toBe( imgs.length);
    });

});