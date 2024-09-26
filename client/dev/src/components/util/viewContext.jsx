import { createContext, useContext } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types'; 

const ViewContext = createContext();

export const useViewContext = () => useContext(ViewContext);

export const ViewProvider = ({ children }) => {

    const initialState = {
        name: localStorage.getItem('name'),
        CLASS: localStorage.getItem('class'),
        race: localStorage.getItem('race'),
        subrace: localStorage.getItem('subrace'),
        skill: localStorage.getItem('skill'),
        bg: localStorage.getItem('background'),
        spells: localStorage.getItem('spellbg'),
        str: localStorage.getItem('str'),
        dex: localStorage.getItem('dex'),
        int: localStorage.getItem('int'),
        wis: localStorage.getItem('wis'),
        char: localStorage.getItem('char')
    };

    const [data, setData] = useState(initialState);

    const updateState = (Data) => {
        setData(Data);
        window.location.reload();
    }

    return (
        <ViewContext.Provider value={{data, updateState}}>
          {children}
        </ViewContext.Provider>
    );
};

ViewProvider.propTypes = {
    children: PropTypes.object
}