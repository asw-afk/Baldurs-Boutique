import './race.css';
import PropTypes from 'prop-types';
import {races} from '../util/data';

export default function Race(props) {
    return (
        <div className="d-flex flex-column bg-success bg-gradient text-white h-50 w-100">
            <div className="display-5 ms-5 text-center">
                <span>Race</span>
            </div>
            <div className="d-flex flex-column flex-justify-content">
            <div className="form-check">
                    <input className="form-check-input" type="radio" name="races" id="r1" value={races[0]} onClick={props.handleRace}></input>
                    <label className="form-check-label" htmlFor="r1">
                        {races[0]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="races" id="r2" value={races[1]} onClick={props.handleRace}></input>
                    <label className="form-check-label" htmlFor="r">
                        {races[1]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="races" id="r3" value={races[2]} onClick={props.handleRace}></input>
                    <label className="form-check-label" htmlFor="r3">
                        {races[2]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="races" id="r4" value={races[3]} onClick={props.handleRace}></input>
                    <label className="form-check-label" htmlFor="r4">
                        {races[3]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="races" id="r5" value={races[4]} onClick={props.handleRace}></input>
                    <label className="form-check-label" htmlFor="r5">
                        {races[4]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="races" id="r6" value={races[5]} onClick={props.handleRace}></input>
                    <label className="form-check-label" htmlFor="r6">
                        {races[5]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="races" id="r7" value={races[6]} onClick={props.handleRace}></input>
                    <label className="form-check-label" htmlFor="r7">
                        {races[6]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="races" id="r8" value={races[7]} onClick={props.handleRace}></input>
                    <label className="form-check-label" htmlFor="r8">
                        {races[7]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="races" id="r9" value={races[8]} onClick={props.handleRace}></input>
                    <label className="form-check-label" htmlFor="r9">
                        {races[8]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="races" id="r10" value={races[9]} onClick={props.handleRace}></input>
                    <label className="form-check-label" htmlFor="r10">
                        {races[9]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="races" id="r11" value={races[10]} onClick={props.handleRace}></input>
                    <label className="form-check-label" htmlFor="r11">
                        {races[10]}
                    </label>
                </div>
            </div>
            <div className="display-6 mt-1 ms-3 mb-3"><span>Selection: {localStorage.getItem('race')}</span></div>
        </div>
    );
}

Race.propTypes = {
    handleRace: PropTypes.func,
    race: PropTypes.string
}