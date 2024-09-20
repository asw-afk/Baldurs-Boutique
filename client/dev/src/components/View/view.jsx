import './view.css';
import PropTypes from 'prop-types';

export default function View(props) {
    return (
        <div className="d-flex flex-row bg-danger bg-gradient h-50 w-100 display-6 text-white">

            <button className="btn btn-primary h-25">Save</button>

            <div className="d-flex flex-column ms-5">
                <span>Name: {props.name} </span>
                <span>Class: {props.class} </span>
                <span>Race: {props.race} </span>
                <span>Subrace: {props.srace} </span>
            </div>

            <div className="d-flex flex-column ms-5">
                <span>Attributes:</span>
                <span>Strength: {props.str} </span>
                <span>Dexterity: {props.dex} </span>
                <span>Constitution: {props.cons} </span>
                <span>Intelligence: {props.int} </span>
                <span>Wisdom: {props.wis} </span>
                <span>Charisma: {props.char} </span>
            </div>

            <div className="d-flex flex-column ms-5">
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
    str: PropTypes.int,
    cons: PropTypes.int,
    dex: PropTypes.int,
    int: PropTypes.int,
    wis: PropTypes.int,
    char: PropTypes.int,
    bck: PropTypes.array,
    spl: PropTypes.array,
    ft: PropTypes.array,
    map: PropTypes.func
}