import './sandbox.css';
import PropTypes from 'prop-types';
import {classes, attributes, backgrounds, races, subraces, skills, spells} from '../util/data';

export default function Sandbox() {
    return (
        <div className="d-flex flex-column bg-success bg-gradient text-white h-50 w-100">
            <div className="display-5 ms-5 text-center">
                <span>Edit All</span>
            </div>
            <div className="d-flex flex-row">
            <div className="d-flex flex-column flex-justify-content">
                <h6 className="display-6">Class</h6>
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
            <div className="d-flex flex-column flex-justify-content ms-3">
                <h6 className="display-6">Attributes</h6>
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
            <div className="d-flex flex-column flex-justify-content ms-3">
                <h6 className="display-6">Backgrounds</h6>
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
            <div className="d-flex flex-column flex-justify-content ms-3">
                <h6 className="display-6">Races</h6>
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
            <div className="d-flex flex-column flex-justify-content ms-3">
                <h6 className="display-6">Subraces</h6>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="1"></input>
                    <label className="form-check-label" htmlFor="1">
                        {subraces[0]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="2" checked></input>
                    <label className="form-check-label" htmlFor="2">
                        {subraces[1]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="3" checked></input>
                    <label className="form-check-label" htmlFor="3">
                        {subraces[2]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="4" checked></input>
                    <label className="form-check-label" htmlFor="4">
                        {subraces[3]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="5" checked></input>
                    <label className="form-check-label" htmlFor="5">
                        {subraces[4]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="6" checked></input>
                    <label className="form-check-label" htmlFor="6">
                        {subraces[5]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="7" checked></input>
                    <label className="form-check-label" htmlFor="7">
                        {subraces[6]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="8" checked></input>
                    <label className="form-check-label" htmlFor="8">
                        {subraces[7]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="9" checked></input>
                    <label className="form-check-label" htmlFor="9">
                        {subraces[8]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="10" checked></input>
                    <label className="form-check-label" htmlFor="10">
                        {subraces[9]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="11" checked></input>
                    <label className="form-check-label" htmlFor="11">
                        {subraces[10]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[11]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[12]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[13]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[14]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[15]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[16]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[17]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[18]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[19]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[20]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[21]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[22]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[23]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[24]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[25]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[26]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[27]}
                    </label>
                </div>
            </div>
            <div className="d-flex flex-column flex-justify-content ms-3">
                <h6 className="display-6">Skills</h6>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="1"></input>
                    <label className="form-check-label" htmlFor="1">
                        {skills[0]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="2" checked></input>
                    <label className="form-check-label" htmlFor="2">
                        {skills[1]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="3" checked></input>
                    <label className="form-check-label" htmlFor="3">
                        {skills[2]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="4" checked></input>
                    <label className="form-check-label" htmlFor="4">
                        {skills[3]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="5" checked></input>
                    <label className="form-check-label" htmlFor="5">
                        {skills[4]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="6" checked></input>
                    <label className="form-check-label" htmlFor="6">
                        {skills[5]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="7" checked></input>
                    <label className="form-check-label" htmlFor="7">
                        {skills[6]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="8" checked></input>
                    <label className="form-check-label" htmlFor="8">
                        {skills[7]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="9" checked></input>
                    <label className="form-check-label" htmlFor="9">
                        {skills[8]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="10" checked></input>
                    <label className="form-check-label" htmlFor="10">
                        {skills[9]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="11" checked></input>
                    <label className="form-check-label" htmlFor="11">
                        {skills[10]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {skills[12]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {skills[13]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {skills[14]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {skills[15]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {skills[16]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {skills[17]}
                    </label>
                </div>
            </div>
            {/* <div className="d-flex flex-column flex-justify-content ms-3">
                <h6 className="display-6">Spells</h6>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="1"></input>
                    <label className="form-check-label" htmlFor="1">
                        {spells[0]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="2" checked></input>
                    <label className="form-check-label" htmlFor="2">
                        {spells[1]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="3" checked></input>
                    <label className="form-check-label" htmlFor="3">
                        {spells[2]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="4" checked></input>
                    <label className="form-check-label" htmlFor="4">
                        {spells[3]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="5" checked></input>
                    <label className="form-check-label" htmlFor="5">
                        {spells[4]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="6" checked></input>
                    <label className="form-check-label" htmlFor="6">
                        {spells[5]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="7" checked></input>
                    <label className="form-check-label" htmlFor="7">
                        {spells[6]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="8" checked></input>
                    <label className="form-check-label" htmlFor="8">
                        {spells[7]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="9" checked></input>
                    <label className="form-check-label" htmlFor="9">
                        {spells[8]}
                    </label>
                </div>
            </div> */}
            </div>
            <button className="btn btn-primary mt-5">Select</button>
            <button className="btn btn-danger">Add</button>
            <button className="btn btn-dark">Subtract</button>
        </div>
    );
}

Sandbox.propTypes = {
    selection: PropTypes.array
}