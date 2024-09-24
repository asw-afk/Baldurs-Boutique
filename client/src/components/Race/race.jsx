import './race.css';
import PropTypes from 'prop-types';
import {races} from '../util/data';

export default function Race() {
    return (
        <div className="d-flex flex-column bg-success bg-gradient text-white h-50 w-100">
            <div className="display-5 ms-5 text-center">
                <span>Race</span>
            </div>
            <div className="d-flex flex-column flex-justify-content">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="1"></input>
                    <label className="form-check-label" htmlFor="1">
                        {races[0]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="2" checked></input>
                    <label className="form-check-label" htmlFor="2">
                        {races[1]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="3" checked></input>
                    <label className="form-check-label" htmlFor="3">
                        {races[2]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="4" checked></input>
                    <label className="form-check-label" htmlFor="4">
                        {races[3]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="5" checked></input>
                    <label className="form-check-label" htmlFor="5">
                        {races[4]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="6" checked></input>
                    <label className="form-check-label" htmlFor="6">
                        {races[5]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="7" checked></input>
                    <label className="form-check-label" htmlFor="7">
                        {races[6]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="8" checked></input>
                    <label className="form-check-label" htmlFor="8">
                        {races[7]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="9" checked></input>
                    <label className="form-check-label" htmlFor="9">
                        {races[8]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="10" checked></input>
                    <label className="form-check-label" htmlFor="10">
                        {races[9]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="11" checked></input>
                    <label className="form-check-label" htmlFor="11">
                        {races[10]}
                    </label>
                </div>
            </div>
            <button className="btn btn-primary mt-5">Select</button>
        </div>
    );
}

Race.propTypes = {
    selection: PropTypes.array
}