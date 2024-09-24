import './class.css';
import PropTypes from 'prop-types';
import {classes} from '../util/data';

export default function Class() {
    return (
        <div className="d-flex flex-column bg-success bg-gradient text-white h-50 w-100">
            <div className="display-5 ms-5 text-center">
                <span>Class</span>
            </div>
            <div className="d-flex flex-column flex-justify-content">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="1"></input>
                    <label className="form-check-label" htmlFor="1">
                        {classes[0]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="2" checked></input>
                    <label className="form-check-label" htmlFor="2">
                        {classes[1]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="3" checked></input>
                    <label className="form-check-label" htmlFor="3">
                        {classes[2]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="4" checked></input>
                    <label className="form-check-label" htmlFor="4">
                        {classes[3]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="5" checked></input>
                    <label className="form-check-label" htmlFor="5">
                        {classes[4]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="6" checked></input>
                    <label className="form-check-label" htmlFor="6">
                        {classes[5]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="7" checked></input>
                    <label className="form-check-label" htmlFor="7">
                        {classes[6]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="8" checked></input>
                    <label className="form-check-label" htmlFor="8">
                        {classes[7]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="9" checked></input>
                    <label className="form-check-label" htmlFor="9">
                        {classes[8]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="10" checked></input>
                    <label className="form-check-label" htmlFor="10">
                        {classes[9]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="11" checked></input>
                    <label className="form-check-label" htmlFor="11">
                        {classes[10]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {classes[11]}
                    </label>
                </div>
            </div>
            <form>
                <div className="d-flex d-row mb-3 mt-3">
                    <label htmlFor="name" className="form-label display-6 ms-3">Name your character:</label>
                    <div>
                    <input type="text" className="form-control ms-5" id="name" aria-describedby="namef"></input>
                    <div id="namef" className="form-text text-light ms-5">Character name is necessary for avatar completion.</div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary ms-5">Submit</button>
            </form>
            <button className="btn btn-primary mt-5">Select</button>
        </div>
    );
}

Class.propTypes = {
    selection: PropTypes.array
}