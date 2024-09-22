import './view.css';
import PropTypes from 'prop-types';

export default function View(props) {
    return (
        <div className="d-flex flex-row bg-danger bg-gradient h-50 w-100 text-white">

            <button className="btn btn-primary h-25">Save</button>

            <div className="d-flex flex-column ms-5" id="data1">
                <span><strong>Bio</strong></span>
                <span>Name: {props.name} </span>
                <span>Class: {props.class} </span>
                <span>Race: {props.race} </span>
                <span>Subrace: {props.srace} </span>
            </div>

            <div className="d-flex flex-column ms-5" id="data2">
                <span><strong>Attributes</strong></span>
                <span>Strength: {props.str} </span>
                <span>Dexterity: {props.dex} </span>
                <span>Constitution: {props.cons} </span>
                <span>Intelligence: {props.int} </span>
                <span>Wisdom: {props.wis} </span>
                <span>Charisma: {props.char} </span>
            </div>

            <div className="d-flex flex-column ms-5" id="data3">
                <span><strong>Skills</strong></span>
                <span>Background: {props.bck} </span>
                <span>Spells: {props.spl} </span>
                <span>Feats: {props.ft} </span>
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
    cons: PropTypes.number,
    dex: PropTypes.number,
    int: PropTypes.number,
    wis: PropTypes.number,
    char: PropTypes.number,
    bck: PropTypes.array,
    spl: PropTypes.array,
    ft: PropTypes.array,
    map: PropTypes.func
}