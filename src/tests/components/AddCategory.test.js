import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";

describe ('Pruebas con AddCategory', ()=> {

    const setCategory = jest.fn(); //esto es para mandar una funcion
    let wrapper = shallow( <AddCategory setCategory={setCategory}/>)

    beforeEach( ()=> {
        jest.clearAllMocks(); //limpia mocksy simulaciones
        wrapper = shallow( <AddCategory setCategory={setCategory}/>)
    });

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto  ', () => {
        const input = wrapper.find('input'); //buscamos el componente
        const value = 'Hola mundo';
        input.simulate('change', { target: {value: value} }); //estoy mandando el evento
        // const input2 = wrapper.find('input');
        // console.log(input2.html());
        expect (wrapper.find('p').text().trim()).toBe(value);
    });

    test('no debe postear la informacion onsubmit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} }); //simulamos el submit del form
        expect(setCategory).not.toHaveBeenCalled();
    });

    test('debe llamar el setcategories', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: {value: value} }); //estoy mandando el evento

        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect (setCategory).toHaveBeenCalled();
        expect (setCategory).toHaveBeenCalledWith( expect.any(Function));
        expect ( input.prop('value')).toBe('');
    });
});