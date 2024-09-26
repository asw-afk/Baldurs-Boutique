import Sandbox from './sandbox.jsx';
import { useState } from 'react';
import {useViewContext} from '../util/viewContext';

export default function Classes() {
    const {data, updateState} = useViewContext();
    const [Class, setClass] = useState('');
    const [race, setRace] = useState('');
    const [Dsc, setDsc] = useState('');
    const [Bg, setBg] = useState('');
    const [str, setStr] = useState(10);
    const [dex, setDex] = useState(10);
    const [int, setInt] = useState(10);
    const [wis, setWis] = useState(10);
    const [char, setChar] = useState(10);
    const [skill, setSkill] = useState('');
    const [subrace, setSubrace] = useState('');

    const handleSubrace = (e) => {
        const { target } = e;
        localStorage.setItem('subrace', target.value);
        const x = localStorage.getItem('subrace');
        if (x !== undefined) {
            setSubrace(x);
        } else {
            setSubrace('');
        }
    };

    const handleSkill = (e) => {
        const { target } = e;
        localStorage.setItem('skill', target.value);
        const x = localStorage.getItem('skill');
        if (x !== undefined) {
            setSkill(x);
        } else {
            setSkill('');
        }
    };

    const handleStr = (e) => {
        e.preventDefault();
        const { id } = e.target;
        if (id == 'increase') {
            setStr(str + 1);
            localStorage.setItem('str', str);
        } else if (id == 'decrease') {
            setStr(str - 1);
            localStorage.setItem('str', str);
        }
    };

    const handleDex = (e) => {
        e.preventDefault();
        const { id } = e.target;
        if (id == 'increase') {
            setDex(dex + 1);
            localStorage.setItem('dex', dex);
        } else if (id == 'decrease') {
            setDex(dex - 1);
            localStorage.setItem('dex', dex);
        }
    };

    const handleInt = (e) => {
        e.preventDefault();
        const { id } = e.target;
        if (id == 'increase') {
            setInt(int + 1);
            localStorage.setItem('int', int);
        } else if (id == 'decrease') {
            setInt(int - 1);
            localStorage.setItem('int', int);
        }
    };

    const handleWis = (e) => {
        e.preventDefault();
        const { id } = e.target;
        if (id == 'increase') {
            setWis(wis + 1);
            localStorage.setItem('wis', wis);
        } else if (id == 'decrease') {
            setWis(wis - 1);
            localStorage.setItem('wis', wis);
        }
    };

    const handleChar = (e) => {
        e.preventDefault();
        const { id } = e.target;
        if (id == 'increase') {
            setChar(char + 1);
            localStorage.setItem('char', char);
        } else if (id == 'decrease') {
            setChar(char - 1);
            localStorage.setItem('char', char);
        }
    };

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
        } else {
            setDsc('');
        }
    };

    const handleRace = (e) => {
        const { target } = e;
        localStorage.setItem('race', target.value);
        const x = localStorage.getItem('race');
        if (x !== undefined) {
            setRace(x);
        } else {
            setRace('');
        }
    };

    const handleClass = (e) => {
        const { target } = e;
        localStorage.setItem('class', target.value);
        const x = localStorage.getItem('class');
        if (x !== undefined) {
            setClass(x);
        } else {
            setClass('');
        }
    };
    
    const handleSubmit = () => {
        updateState(data);
    }

    return (
        <Sandbox Class={Class} handleClass={handleClass} race={race} handleRace={handleRace} Dsc={Dsc} Bg={Bg} handleDsc={handleDsc} str={str} dex={str} int={int} wis={wis} char={char} handleStr={handleStr} handleDex={handleDex} handleInt={handleInt} handleWis={handleWis} handleChar={handleChar} skill={skill} handleSkill={handleSkill} subrace={subrace} handleSubrace={handleSubrace} handleSubmit={handleSubmit}/>
    );
}