import Subrace from './subrace.jsx';
import { useState } from 'react';
import {useViewContext} from '../util/viewContext';

export default function Races() {

    const [subrace, setSubrace] = useState('');
    const {data, updateState} = useViewContext();

    const handleSubrace = (e) => {
        const { target } = e;
        
        localStorage.setItem('subrace', target.value);
        const x = localStorage.getItem('subrace');
        if (x !== undefined) {
            setSubrace(x);
            updateState(data);
        } else {
            setSubrace('');
        }
    };

    return (
        <Subrace subrace={subrace} handleSubrace={handleSubrace}/>
    );
}