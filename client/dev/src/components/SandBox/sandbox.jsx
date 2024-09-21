import './sandbox.css';
import PropTypes from 'prop-types';

export default function Sandbox(props) {
    return (
        <div className="d-flex flex-column bg-success bg-gradient text-white h-50 w-100">
            <div className="dropdown mt-5">
                <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Presets
                </button>
            </div>
            <div className="dropdown mt-5">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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