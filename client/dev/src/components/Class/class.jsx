import './class.css';
import PropTypes from 'prop-types';
import {classes} from '../util/data';

export default function CLASS(props) {
    return (
        <div className="d-flex flex-column bg-success bg-gradient text-white h-50 w-100">
            <div className="display-5 ms-5 text-center">
                <span>Class</span>
            </div>
            <div className="d-flex flex-column flex-justify-content">
            <div className="form-check">
                    <input className="form-check-input" type="radio" name="classes" id="c1" value={classes[0]} onClick={props.handleClass}></input>
                    <label className="form-check-label" htmlFor="c1">
                        {classes[0]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="classes" id="c2" value={classes[1]} onClick={props.handleClass}></input>
                    <label className="form-check-label" htmlFor="c2">
                        {classes[1]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="classes" id="c3" value={classes[2]} onClick={props.handleClass}></input>
                    <label className="form-check-label" htmlFor="c3">
                        {classes[2]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="classes" id="c4" value={classes[3]} onClick={props.handleClass}></input>
                    <label className="form-check-label" htmlFor="c4">
                        {classes[3]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="classes" id="c5" value={classes[4]} onClick={props.handleClass}></input>
                    <label className="form-check-label" htmlFor="c5">
                        {classes[4]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="classes" id="c6" value={classes[5]} onClick={props.handleClass}></input>
                    <label className="form-check-label" htmlFor="c6">
                        {classes[5]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="classes" id="c7" value={classes[6]} onClick={props.handleClass}></input>
                    <label className="form-check-label" htmlFor="c7">
                        {classes[6]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="classes" id="c8" value={classes[7]} onClick={props.handleClass}></input>
                    <label className="form-check-label" htmlFor="c8">
                        {classes[7]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="classes" id="c9" value={classes[8]} onClick={props.handleClass}></input>
                    <label className="form-check-label" htmlFor="c9">
                        {classes[8]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="classes" id="c10" value={classes[9]} onClick={props.handleClass}></input>
                    <label className="form-check-label" htmlFor="c10">
                        {classes[9]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="classes" id="c11" value={classes[10]} onClick={props.handleClass}></input>
                    <label className="form-check-label" htmlFor="c11">
                        {classes[10]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="classes" id="c12" value={classes[11]} onClick={props.handleClass}></input>
                    <label className="form-check-label" htmlFor="c12">
                        {classes[11]}
                    </label>
                </div>
            </div>
            <form onSubmit={props.handleForm}>
                <div className="d-flex d-row mb-1 mt-3">
                    <label htmlFor="name" className="form-label display-6 ms-3">Name your character:</label>
                    <div>
                    <input type="text" className="form-control ms-5 mt-3" id="name" value={props.name} onChange={props.handleChange}></input>
                    <div className="d-flex flex-row">
                    <button type="submit" className="btn btn-primary ms-5 mt-2">Submit</button>
                    <div id="namef" className="form-text text-light ms-5 mt-3">Character name is necessary for avatar completion.</div>
                    </div>
                    </div>
                </div>
            </form>
            <div className="display-6 mt-1 ms-3 mb-3"><span>Selection: {localStorage.getItem('class')}</span></div>
        </div>
    );
}

CLASS.propTypes = {
    Class: PropTypes.string,
    name: PropTypes.string,
    handleClass: PropTypes.func,
    handleForm: PropTypes.func,
    handleChange: PropTypes.func
}