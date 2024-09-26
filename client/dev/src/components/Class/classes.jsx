import CLASS from './class.jsx';
import { useState } from 'react';
import {useViewContext} from '../util/viewContext'

export default function Classes() {
    const {data, updateState} = useViewContext();
    const [Class, setClass] = useState('');
    const [name, setName] = useState('');

    const handleClass = (e) => {
        const { target } = e;
        localStorage.setItem('class', target.value);
        const x = localStorage.getItem('class');
        if (x !== undefined) {
            setClass(x);
            updateState(data);
        } else {
            setClass('');
        }
    };

    const handleForm = (e) => {
        e.preventDefault();
        const x = localStorage.getItem('name');
        console.log(x);
        if (x == '' || x == undefined) {
            window.alert("Please, input character name");
            setName('');
        } else {
            setName(x);
            updateState(data);
        }
        
    };

    const handleChange = (e) => {
        const {value} = e.target;
        if (value != '') {
            localStorage.setItem('name', value);
        }
        setName(value);
    };

    return (
        <CLASS Class={Class} name={name} handleClass={handleClass} handleForm={handleForm} handleChange={handleChange}/>
    );
}