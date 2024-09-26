// import { useState } from 'react';
import Attributes from './attributes.jsx';
import {useViewContext} from '../util/viewContext';

export default function Attribute() {
    const {data, updateState} = useViewContext();

    const handleStr = (e) => {
        e.preventDefault();
        if (localStorage.getItem('str') == undefined) {
            localStorage.setItem('str', '10');
        }
        var Str = localStorage.getItem('str');
        const { id } = e.target;
        if (id == 'increase') {
            localStorage.setItem('str', Number(Str) + 1);
            updateState(data);
        } else if (id == 'decrease') {
            localStorage.setItem('str', Number(Str) - 1);
            updateState(data);
        }
    };

    const handleDex = (e) => {
        e.preventDefault();
        if (localStorage.getItem('dex') == undefined) {
            localStorage.setItem('dex', 10);
        }
        var Str = localStorage.getItem('dex');
        const { id } = e.target;
        if (id == 'increase') {
            localStorage.setItem('dex', Number(Str) + 1);
            updateState(data);
        } else if (id == 'decrease') {
            localStorage.setItem('dex', Number(Str) - 1);
            updateState(data);
        }
    };

    const handleInt = (e) => {
        e.preventDefault();
        if (localStorage.getItem('int') == undefined) {
            localStorage.setItem('int', 10);
        }
        var Str = localStorage.getItem('int');
        const { id } = e.target;
        if (id == 'increase') {
            localStorage.setItem('int', Number(Str) + 1);
            updateState(data);
        } else if (id == 'decrease') {
            localStorage.setItem('int', Number(Str) - 1);
            updateState(data);
        }
    };

    const handleWis = (e) => {
        e.preventDefault();
        if (localStorage.getItem('wis') == undefined) {
            localStorage.setItem('wis', 10);
        }
        var Str = localStorage.getItem('wis');
        const { id } = e.target;
        if (id == 'increase') {
            localStorage.setItem('wis', Number(Str) + 1);
            updateState(data);
        } else if (id == 'decrease') {
            localStorage.setItem('wis', Number(Str) - 1);
            updateState(data);
        }
    };

    const handleChar = (e) => {
        e.preventDefault();
        if (localStorage.getItem('char') == undefined) {
            localStorage.setItem('char', 10);
        }
        var Str = localStorage.getItem('char');
        const { id } = e.target;
        if (id == 'increase') {
            localStorage.setItem('char', Number(Str) + 1);
            updateState(data);
        } else if (id == 'decrease') {
            localStorage.setItem('char', Number(Str) - 1);
            updateState(data);
        }
    };

    return (

        <Attributes handleStr={handleStr} handleDex={handleDex} handleInt={handleInt} handleWis={handleWis} handleChar={handleChar}/>

    );
};