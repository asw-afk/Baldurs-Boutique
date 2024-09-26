import Skills from './skills.jsx';
import { useState } from 'react';
import {useViewContext} from '../util/viewContext';

export default function Skill() {
    const {data, updateState} = useViewContext();
    const [skill, setSkill] = useState('');

    const handleSkill = (e) => {
        const { target } = e;
        localStorage.setItem('skill', target.value);
        const x = localStorage.getItem('skill');
        if (x !== undefined) {
            setSkill(x);
            updateState(data);
        } else {
            setSkill('');
        }
    };

    return (
        <Skills skill={skill} handleSkill={handleSkill}/>
    );
}