import './sandbox.css';
import PropTypes from 'prop-types';

const type = localStorage.getItem('1');

// function setPreset(name) {

// }

function setHeader(type) {
    if (type == null) { 
        return 'Select Category';
    } else {
        return type;
    }
}

export default function Sandbox(props) {
    return (
        <div className="d-flex flex-column bg-success bg-gradient text-white h-50 w-100">
            <div className="display-5">
                <span>{ setHeader(type) }</span>
            </div>
            <div className="dropdown mt-5">
                <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Presets
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item">Knight</button>
                    <button className="dropdown-item">Mage</button>
                    <button className="dropdown-item">Paladin</button>
                    <button className="dropdown-item">Rogue</button>
                    <button className="dropdown-item">Berserk</button>
                    <button className="dropdown-item">Paladin</button>
                    <button className="dropdown-item">Bard</button>
                    <button className="dropdown-item">Druid</button>
                </div>
            </div>
            <div className="dropdown mt-5">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Selection
                </button>
            </div>
            <span className="display-6 mt-5">Current Selection: {props.selection} </span>
        </div>
    );
}

Sandbox.propTypes = {
    selection: PropTypes.array
}