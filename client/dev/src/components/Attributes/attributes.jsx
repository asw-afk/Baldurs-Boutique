import './attributes.css';
import PropTypes from 'prop-types';
import {attributes} from '../util/data';

export default function Attributes() {
    return (
        <div className="d-flex flex-column bg-success bg-gradient text-white h-50 w-100">
            <div className="display-5 ms-5 text-center">
                <span>Attributes</span>
            </div>
            <div className="d-flex flex-column flex-justify-content">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="1"></input>
                    <label className="form-check-label" htmlFor="1">
                        {attributes[0]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="2" checked></input>
                    <label className="form-check-label" htmlFor="2">
                        {attributes[1]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="3" checked></input>
                    <label className="form-check-label" htmlFor="3">
                        {attributes[2]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="4" checked></input>
                    <label className="form-check-label" htmlFor="4">
                        {attributes[3]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="5" checked></input>
                    <label className="form-check-label" htmlFor="5">
                        {attributes[4]}
                    </label>
                </div>
            </div>
            <button className="btn btn-primary mt-5">Add</button>
            <button className="btn btn-danger">Substract</button>
        </div>
    );
}

Attributes.propTypes = {
    selection: PropTypes.array
}