// import './sandbox.css';
import PropTypes from 'prop-types';
import {backgrounds} from '../util/data';

export default function Background() {
    return (
        <div className="d-flex flex-column bg-success bg-gradient text-white h-50 w-100">
            <div className="display-5 ms-5 text-center">
                <span>Background</span>
            </div>
            <div className="d-flex flex-column flex-justify-content">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="1"></input>
                    <label className="form-check-label" htmlFor="1">
                        {backgrounds[0].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="2" checked></input>
                    <label className="form-check-label" htmlFor="2">
                        {backgrounds[1].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="3" checked></input>
                    <label className="form-check-label" htmlFor="3">
                        {backgrounds[2].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="4" checked></input>
                    <label className="form-check-label" htmlFor="4">
                        {backgrounds[3].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="5" checked></input>
                    <label className="form-check-label" htmlFor="5">
                        {backgrounds[4].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="6" checked></input>
                    <label className="form-check-label" htmlFor="6">
                        {backgrounds[5].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="7" checked></input>
                    <label className="form-check-label" htmlFor="7">
                        {backgrounds[6].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="8" checked></input>
                    <label className="form-check-label" htmlFor="8">
                        {backgrounds[7].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="9" checked></input>
                    <label className="form-check-label" htmlFor="9">
                        {backgrounds[8].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="10" checked></input>
                    <label className="form-check-label" htmlFor="10">
                        {backgrounds[9].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="11" checked></input>
                    <label className="form-check-label" htmlFor="11">
                        {backgrounds[10].bg}
                    </label>
                </div>
            </div>
            <button className="btn btn-primary mt-5">Select</button>
        </div>
    );
}

Background.propTypes = {
    selection: PropTypes.array
}