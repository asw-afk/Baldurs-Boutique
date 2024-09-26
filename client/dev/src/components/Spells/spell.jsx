import { useState } from 'react';
import Spells from './spells.jsx';
import {useViewContext} from '../util/viewContext';

export default function Spell() {
    const [Dsc, setDsc] = useState('');
    const [Bg, setBg] = useState('');
    const {data, updateState} = useViewContext();

    const handleDsc = (e) => {
        const { target } = e;
        const object = JSON.parse(target.value);
        localStorage.setItem('spelldsc', object.dsc);
        localStorage.setItem('spellbg', object.bg);
        const x = localStorage.getItem('spelldsc');
        const y = localStorage.getItem('spellbg');
        if (x !== undefined) {
            setDsc(x);
            setBg(y);
            updateState(data);
        } else {
            setDsc('');
        }
    };

    return (
        <Spells Dsc={Dsc} Bg={Bg} handleDsc={handleDsc}/>
    );
}