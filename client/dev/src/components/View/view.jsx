import './view.css';
import PropTypes from 'prop-types';
import {useViewContext} from '../util/viewContext'

export default function View() {

    const {data} = useViewContext();
    const {name, CLASS, race, subrace, str, dex, int, wis, char, skill, spells, bg} = data;

    function buttonHandler() {
        window.alert("Character isn't ready for upload");
    };

    return (
        <div className="d-flex flex-row bg-danger bg-gradient h-50 w-100 text-white">
            <div className="d-flex flex-row ms-5 mt-2">
            <button className="btn btn-primary h-25" onClick={buttonHandler}>Save</button>

            <div className="d-flex flex-column ms-5" id="data1">
                <span><strong>Bio</strong></span>
                <span>Name: {name} </span>
                <span>Class: {CLASS} </span>
                <span>Race: {race} </span>
                <span>Subrace: {subrace} </span>
            </div>

            <div className="d-flex flex-column ms-5" id="data2">
                <span><strong>Attributes</strong></span>
                <span>Strength: {str} </span>
                <span>Dexterity: {dex} </span>
                <span>Intelligence: {int} </span>
                <span>Wisdom: {wis} </span>
                <span>Charisma: {char} </span>
            </div>

            <div className="d-flex flex-column ms-5" id="data3">
                <span><strong>Skills</strong></span>
                <span>Background: {bg} </span>
                <span>Spells: {spells} </span>
                <span>Feats: {skill} </span>
            </div>
            </div>
        </div>
    );
}

View.propTypes = {
    name: PropTypes.string,
    class: PropTypes.string,
    race: PropTypes.string,
    srace: PropTypes.string,
    str: PropTypes.number,
    dex: PropTypes.number,
    int: PropTypes.number,
    wis: PropTypes.number,
    char: PropTypes.number,
    bck: PropTypes.array,
    spl: PropTypes.array,
    ft: PropTypes.array,
    handleAtt: PropTypes.func
}