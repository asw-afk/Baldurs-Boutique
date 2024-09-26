import './skills.css';
import PropTypes from 'prop-types';
import {skills} from '../util/data';

export default function Skills(props) {
    return (
        <div className="d-flex flex-column bg-success bg-gradient text-white h-50 w-100">
            <div className="display-5 ms-5 text-center">
                <span>Skills</span>
            </div>
            <div className="d-flex flex-column flex-justify-content">
            <div className="form-check">
                    <input className="form-check-input" type="radio" name="skills" id="sk1" value={skills[0]} onClick={props.handleSkill}></input>
                    <label className="form-check-label" htmlFor="sk1">
                        {skills[0]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="skills" id="sk2" value={skills[1]} onClick={props.handleSkill}></input>
                    <label className="form-check-label" htmlFor="sk2">
                        {skills[1]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="skills" id="sk3" value={skills[2]} onClick={props.handleSkill}></input>
                    <label className="form-check-label" htmlFor="sk3">
                        {skills[2]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="skills" id="sk4" value={skills[3]} onClick={props.handleSkill}></input>
                    <label className="form-check-label" htmlFor="sk4">
                        {skills[3]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="skills" id="sk5" value={skills[4]} onClick={props.handleSkill}></input>
                    <label className="form-check-label" htmlFor="sk5">
                        {skills[4]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="skills" id="sk6" value={skills[5]} onClick={props.handleSkill}></input>
                    <label className="form-check-label" htmlFor="sk6">
                        {skills[5]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="skills" id="sk7" value={skills[6]} onClick={props.handleSkill}></input>
                    <label className="form-check-label" htmlFor="sk7">
                        {skills[6]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="skills" id="sk8" value={skills[7]} onClick={props.handleSkill}></input>
                    <label className="form-check-label" htmlFor="sk8">
                        {skills[7]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="skills" id="sk9" value={skills[8]} onClick={props.handleSkill}></input>
                    <label className="form-check-label" htmlFor="sk9">
                        {skills[8]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="skills" id="sk10" value={skills[9]} onClick={props.handleSkill}></input>
                    <label className="form-check-label" htmlFor="sk10">
                        {skills[9]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="skills" id="sk11" value={skills[10]} onClick={props.handleSkill}></input>
                    <label className="form-check-label" htmlFor="sk11">
                        {skills[10]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="skills" id="sk12" value={skills[11]} onClick={props.handleSkill}></input>
                    <label className="form-check-label" htmlFor="sk12">
                        {skills[11]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="skills" id="sk13" value={skills[12]} onClick={props.handleSkill}></input>
                    <label className="form-check-label" htmlFor="sk13">
                        {skills[12]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="skills" id="sk14" value={skills[13]} onClick={props.handleSkill}></input>
                    <label className="form-check-label" htmlFor="sk14">
                        {skills[13]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="skills" id="sk15" value={skills[14]} onClick={props.handleSkill}></input>
                    <label className="form-check-label" htmlFor="sk15">
                        {skills[14]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="skills" id="sk16" value={skills[15]} onClick={props.handleSkill}></input>
                    <label className="form-check-label" htmlFor="sk16">
                        {skills[15]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="skills" id="sk17" value={skills[16]} onClick={props.handleSkill}></input>
                    <label className="form-check-label" htmlFor="sk17">
                        {skills[16]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="skills" id="sk18" value={skills[17]} onClick={props.handleSkill}></input>
                    <label className="form-check-label" htmlFor="sk18">
                        {skills[17]}
                    </label>
                </div>
            </div>
            <div className="display-6 mt-1 ms-3 mb-3"><span>Selection: {localStorage.getItem('skill')}</span></div>
        </div>
    );
}

Skills.propTypes = {
    handleSkill: PropTypes.func,
    skill: PropTypes.string
}