import Race from './race.jsx';
import { useState } from 'react';
import {useViewContext} from '../util/viewContext';

export default function Races() {
    const {data, updateState} = useViewContext();
    const [race, setRace] = useState('');

    const handleRace = (e) => {
        const { target } = e;
        localStorage.setItem('race', target.value);
        const x = localStorage.getItem('race');
        if (x !== undefined) {
            setRace(x);
            updateState(data);
        } else {
            setRace('');
        }
    };

    return (
        <Race race={race} handleRace={handleRace}/>
    );
}