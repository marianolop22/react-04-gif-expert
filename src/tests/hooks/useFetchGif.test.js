import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe ('Vamos a testear useFetchGif', ()=> {

    test('debe de retornar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs ('One Punch') );
        const { data, loading} = result.current;

        await waitForNextUpdate();//esto es por un tema de unmount
        expect(data.length).toBe(0);
        expect(loading).toBe(true);

    });

    test('debe de retornar un arreglo de imagenes y loading false', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs ('One Punch') );
        await waitForNextUpdate(); //esto espera a que resuelva el custom hook
        const { data, loading} = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    });

});