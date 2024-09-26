import { useState } from 'react';
import Background from './background.jsx';
import {useViewContext} from '../util/viewContext';

export default function Backgrounds() {
    const {data, updateState} = useViewContext();
    const [Dsc, setDsc] = useState('');
    const [Bg, setBg] = useState('');

    const handleDsc = (e) => {
        const { target } = e;
        const object = JSON.parse(target.value);
        localStorage.setItem('description', object.dsc);
        localStorage.setItem('background', object.bg);
        const x = localStorage.getItem('description');
        const y = localStorage.getItem('background');
        if (x !== undefined) {
            setDsc(x);
            setBg(y);
            updateState(data);
        } else {
            setDsc('');
        }
    };

    return (
        <Background Dsc={Dsc} Bg={Bg} handleDsc={handleDsc}/>
    );
}