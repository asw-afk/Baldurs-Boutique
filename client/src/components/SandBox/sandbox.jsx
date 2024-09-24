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
                    <input className="form-check-input" type="radio" value="option1" name="flexRadioDefault" id="1"></input>
                    <label className="form-check-label" htmlFor="1">
                        {classes[0]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option2" name="flexRadioDefault" id="2" checked></input>
                    <label className="form-check-label" htmlFor="2">
                        {classes[1]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option3" name="flexRadioDefault" id="3" checked></input>
                    <label className="form-check-label" htmlFor="3">
                        {classes[2]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option4" name="flexRadioDefault" id="4" checked></input>
                    <label className="form-check-label" htmlFor="4">
                        {classes[3]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option5" name="flexRadioDefault" id="5" checked></input>
                    <label className="form-check-label" htmlFor="5">
                        {classes[4]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option6" name="flexRadioDefault" id="6" checked></input>
                    <label className="form-check-label" htmlFor="6">
                        {classes[5]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option7" name="flexRadioDefault" id="7" checked></input>
                    <label className="form-check-label" htmlFor="7">
                        {classes[6]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option8" name="flexRadioDefault" id="8" checked></input>
                    <label className="form-check-label" htmlFor="8">
                        {classes[7]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option9" name="flexRadioDefault" id="9" checked></input>
                    <label className="form-check-label" htmlFor="9">
                        {classes[8]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option10" name="flexRadioDefault" id="10" checked></input>
                    <label className="form-check-label" htmlFor="10">
                        {classes[9]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option11" name="flexRadioDefault" id="11" checked></input>
                    <label className="form-check-label" htmlFor="11">
                        {classes[10]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option12" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {classes[11]}
                    </label>
                </div>
            </div>
            <div className="d-flex flex-column flex-justify-content ms-3">
                <h6 className="display-6">Attributes</h6>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option13" name="flexRadioDefault" id="1"></input>
                    <label className="form-check-label" htmlFor="1">
                        {attributes[0]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option14" name="flexRadioDefault" id="2" checked></input>
                    <label className="form-check-label" htmlFor="2">
                        {attributes[1]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option15" name="flexRadioDefault" id="3" checked></input>
                    <label className="form-check-label" htmlFor="3">
                        {attributes[2]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option16" name="flexRadioDefault" id="4" checked></input>
                    <label className="form-check-label" htmlFor="4">
                        {attributes[3]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option17" name="flexRadioDefault" id="5" checked></input>
                    <label className="form-check-label" htmlFor="5">
                        {attributes[4]}
                    </label>
                </div>
            </div>
            <div className="d-flex flex-column flex-justify-content ms-3">
                <h6 className="display-6">Backgrounds</h6>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option18" name="flexRadioDefault" id="1"></input>
                    <label className="form-check-label" htmlFor="1">
                        {backgrounds[0].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option19" name="flexRadioDefault" id="2" checked></input>
                    <label className="form-check-label" htmlFor="2">
                        {backgrounds[1].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option20" name="flexRadioDefault" id="3" checked></input>
                    <label className="form-check-label" htmlFor="3">
                        {backgrounds[2].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option21" name="flexRadioDefault" id="4" checked></input>
                    <label className="form-check-label" htmlFor="4">
                        {backgrounds[3].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option22" name="flexRadioDefault" id="5" checked></input>
                    <label className="form-check-label" htmlFor="5">
                        {backgrounds[4].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option23" name="flexRadioDefault" id="6" checked></input>
                    <label className="form-check-label" htmlFor="6">
                        {backgrounds[5].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option24" name="flexRadioDefault" id="7" checked></input>
                    <label className="form-check-label" htmlFor="7">
                        {backgrounds[6].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option25" name="flexRadioDefault" id="8" checked></input>
                    <label className="form-check-label" htmlFor="8">
                        {backgrounds[7].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option26" name="flexRadioDefault" id="9" checked></input>
                    <label className="form-check-label" htmlFor="9">
                        {backgrounds[8].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option27" name="flexRadioDefault" id="10" checked></input>
                    <label className="form-check-label" htmlFor="10">
                        {backgrounds[9].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option28" name="flexRadioDefault" id="11" checked></input>
                    <label className="form-check-label" htmlFor="11">
                        {backgrounds[10].bg}
                    </label>
                </div>
            </div>
            <div className="d-flex flex-column flex-justify-content ms-3">
                <h6 className="display-6">Races</h6>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option29" name="flexRadioDefault" id="1"></input>
                    <label className="form-check-label" htmlFor="1">
                        {races[0]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option30" name="flexRadioDefault" id="2" checked></input>
                    <label className="form-check-label" htmlFor="2">
                        {races[1]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option31" name="flexRadioDefault" id="3" checked></input>
                    <label className="form-check-label" htmlFor="3">
                        {races[2]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option32" name="flexRadioDefault" id="4" checked></input>
                    <label className="form-check-label" htmlFor="4">
                        {races[3]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option33" name="flexRadioDefault" id="5" checked></input>
                    <label className="form-check-label" htmlFor="5">
                        {races[4]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option34" name="flexRadioDefault" id="6" checked></input>
                    <label className="form-check-label" htmlFor="6">
                        {races[5]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option35" name="flexRadioDefault" id="7" checked></input>
                    <label className="form-check-label" htmlFor="7">
                        {races[6]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option36" name="flexRadioDefault" id="8" checked></input>
                    <label className="form-check-label" htmlFor="8">
                        {races[7]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option37" name="flexRadioDefault" id="9" checked></input>
                    <label className="form-check-label" htmlFor="9">
                        {races[8]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option38" name="flexRadioDefault" id="10" checked></input>
                    <label className="form-check-label" htmlFor="10">
                        {races[9]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option39" name="flexRadioDefault" id="11" checked></input>
                    <label className="form-check-label" htmlFor="11">
                        {races[10]}
                    </label>
                </div>
            </div>
            <div className="d-flex flex-column flex-justify-content ms-3">
                <h6 className="display-6">Subraces</h6>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option40" name="flexRadioDefault" id="1"></input>
                    <label className="form-check-label" htmlFor="1">
                        {subraces[0]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option41" name="flexRadioDefault" id="2" checked></input>
                    <label className="form-check-label" htmlFor="2">
                        {subraces[1]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option42" name="flexRadioDefault" id="3" checked></input>
                    <label className="form-check-label" htmlFor="3">
                        {subraces[2]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option43" name="flexRadioDefault" id="4" checked></input>
                    <label className="form-check-label" htmlFor="4">
                        {subraces[3]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option44" name="flexRadioDefault" id="5" checked></input>
                    <label className="form-check-label" htmlFor="5">
                        {subraces[4]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option45" name="flexRadioDefault" id="6" checked></input>
                    <label className="form-check-label" htmlFor="6">
                        {subraces[5]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option46" name="flexRadioDefault" id="7" checked></input>
                    <label className="form-check-label" htmlFor="7">
                        {subraces[6]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option47" name="flexRadioDefault" id="8" checked></input>
                    <label className="form-check-label" htmlFor="8">
                        {subraces[7]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option48" name="flexRadioDefault" id="9" checked></input>
                    <label className="form-check-label" htmlFor="9">
                        {subraces[8]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option49" name="flexRadioDefault" id="10" checked></input>
                    <label className="form-check-label" htmlFor="10">
                        {subraces[9]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option50" name="flexRadioDefault" id="11" checked></input>
                    <label className="form-check-label" htmlFor="11">
                        {subraces[10]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option51" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[11]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option52" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[12]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option53" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[13]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option54" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[14]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option55" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[15]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option56" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[16]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option57" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[17]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option58" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[18]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option59" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[19]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option60" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[20]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option61" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[21]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option62" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[22]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option63" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[23]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option64" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[24]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option65" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[25]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option66" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[26]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option67" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {subraces[27]}
                    </label>
                </div>
            </div>
            <div className="d-flex flex-column flex-justify-content ms-3">
                <h6 className="display-6">Skills</h6>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option68" name="flexRadioDefault" id="1"></input>
                    <label className="form-check-label" htmlFor="1">
                        {skills[0]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option69" name="flexRadioDefault" id="2" checked></input>
                    <label className="form-check-label" htmlFor="2">
                        {skills[1]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option70" name="flexRadioDefault" id="3" checked></input>
                    <label className="form-check-label" htmlFor="3">
                        {skills[2]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option71" name="flexRadioDefault" id="4" checked></input>
                    <label className="form-check-label" htmlFor="4">
                        {skills[3]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option72" name="flexRadioDefault" id="5" checked></input>
                    <label className="form-check-label" htmlFor="5">
                        {skills[4]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option73" name="flexRadioDefault" id="6" checked></input>
                    <label className="form-check-label" htmlFor="6">
                        {skills[5]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option74" name="flexRadioDefault" id="7" checked></input>
                    <label className="form-check-label" htmlFor="7">
                        {skills[6]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option75" name="flexRadioDefault" id="8" checked></input>
                    <label className="form-check-label" htmlFor="8">
                        {skills[7]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option76" name="flexRadioDefault" id="9" checked></input>
                    <label className="form-check-label" htmlFor="9">
                        {skills[8]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option77" name="flexRadioDefault" id="10" checked></input>
                    <label className="form-check-label" htmlFor="10">
                        {skills[9]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option78" name="flexRadioDefault" id="11" checked></input>
                    <label className="form-check-label" htmlFor="11">
                        {skills[10]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option79" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {skills[12]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option80" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {skills[13]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option81" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {skills[14]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option82" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {skills[15]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option83" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {skills[16]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option84" name="flexRadioDefault" id="12" checked></input>
                    <label className="form-check-label" htmlFor="12">
                        {skills[17]}
                    </label>
                </div>
            </div>
            {/* <div className="d-flex flex-column flex-justify-content ms-3">
                <h6 className="display-6">Spells</h6>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option85" name="flexRadioDefault" id="1"></input>
                    <label className="form-check-label" htmlFor="1">
                        {spells[0]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option86" name="flexRadioDefault" id="2" checked></input>
                    <label className="form-check-label" htmlFor="2">
                        {spells[1]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option87" name="flexRadioDefault" id="3" checked></input>
                    <label className="form-check-label" htmlFor="3">
                        {spells[2]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option88" name="flexRadioDefault" id="4" checked></input>
                    <label className="form-check-label" htmlFor="4">
                        {spells[3]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option89" name="flexRadioDefault" id="5" checked></input>
                    <label className="form-check-label" htmlFor="5">
                        {spells[4]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option90" name="flexRadioDefault" id="6" checked></input>
                    <label className="form-check-label" htmlFor="6">
                        {spells[5]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option91" name="flexRadioDefault" id="7" checked></input>
                    <label className="form-check-label" htmlFor="7">
                        {spells[6]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option92" name="flexRadioDefault" id="8" checked></input>
                    <label className="form-check-label" htmlFor="8">
                        {spells[7]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option93" name="flexRadioDefault" id="9" checked></input>
                    <label className="form-check-label" htmlFor="9">
                        {spells[8]}
                    </label>
                </div>
            </div> */}
            </div>
            <button className="btn btn-primary mt-5">Select</button>
            <button className="btn btn-danger">Add</button>
            <button className="btn btn-dark">Substract</button>
        </div>
    );
}

Sandbox.propTypes = {
    selection: PropTypes.array
}