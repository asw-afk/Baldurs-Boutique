import './sandbox.css';
import PropTypes from 'prop-types';
import {classes, attributes, backgrounds, races, subraces, skills} from '../util/data';

export default function Sandbox(props) {
    return (
        <div className="d-flex flex-column bg-success bg-gradient text-white h-50 w-100">
            <div className="display-5 ms-5 text-center">
                <span>Edit All</span>
            </div>
            <div className="d-flex flex-row">
            <div className="d-flex flex-column flex-justify-content">
                <h6 className="display-6">Class</h6>
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
            <div className="d-flex flex-column flex-justify-content ms-3">
                <h6 className="display-6">Attributes</h6>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="attributes" id="a1" value={attributes[0]}></input>
                    <label className="form-check-label" htmlFor="a1">
                        {attributes[0]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="attributes" id="a2" value={attributes[1]}></input>
                    <label className="form-check-label" htmlFor="a2">
                        {attributes[1]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="attributes" id="a3" value={attributes[2]}></input>
                    <label className="form-check-label" htmlFor="a3">
                        {attributes[2]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="attributes" id="a4" value={attributes[3]}></input>
                    <label className="form-check-label" htmlFor="a4">
                        {attributes[3]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="attributes" id="a5" value={attributes[0]}></input>
                    <label className="form-check-label" htmlFor="a5">
                        {attributes[4]}
                    </label>
                </div>
            </div>
            <div className="d-flex flex-column flex-justify-content ms-3">
                <h6 className="display-6">Backgrounds</h6>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="backgrounds" id="b1" value={JSON.stringify(backgrounds[0])} onClick={props.handleDsc}></input>
                    <label className="form-check-label" htmlFor="b1">
                        {backgrounds[0].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="backgrounds" id="b2" value={JSON.stringify(backgrounds[1])} onClick={props.handleDsc}></input>
                    <label className="form-check-label" htmlFor="b2">
                        {backgrounds[1].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="backgrounds" id="b3" value={JSON.stringify(backgrounds[2])} onClick={props.handleDsc}></input>
                    <label className="form-check-label" htmlFor="b3">
                        {backgrounds[2].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="backgrounds" id="b4" value={JSON.stringify(backgrounds[3])} onClick={props.handleDsc}></input>
                    <label className="form-check-label" htmlFor="b4">
                        {backgrounds[3].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="backgrounds" id="b5" value={JSON.stringify(backgrounds[4])} onClick={props.handleDsc}></input>
                    <label className="form-check-label" htmlFor="b5">
                        {backgrounds[4].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="backgrounds" id="b6" value={JSON.stringify(backgrounds[5])} onClick={props.handleDsc}></input>
                    <label className="form-check-label" htmlFor="b6">
                        {backgrounds[5].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="backgrounds" id="b7" value={JSON.stringify(backgrounds[6])} onClick={props.handleDsc}></input>
                    <label className="form-check-label" htmlFor="b7">
                        {backgrounds[6].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="backgrounds" id="b8" value={JSON.stringify(backgrounds[7])} onClick={props.handleDsc}></input>
                    <label className="form-check-label" htmlFor="b8">
                        {backgrounds[7].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="backgrounds" id="b9" value={JSON.stringify(backgrounds[8])} onClick={props.handleDsc}></input>
                    <label className="form-check-label" htmlFor="b9">
                        {backgrounds[8].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="backgrounds" id="b10" value={JSON.stringify(backgrounds[9])} onClick={props.handleDsc}></input>
                    <label className="form-check-label" htmlFor="b10">
                        {backgrounds[9].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="backgrounds" id="b11" value={JSON.stringify(backgrounds[10])} onClick={props.handleDsc}></input>
                    <label className="form-check-label" htmlFor="b11">
                        {backgrounds[10].bg}
                    </label>
                </div>
            </div>
            <div className="d-flex flex-column flex-justify-content ms-3">
                <h6 className="display-6">Races</h6>
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
            <div className="d-flex flex-column flex-justify-content ms-3">
                <h6 className="display-6">Subraces</h6>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s1" value={subraces[0]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s1">
                        {subraces[0]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s2" value={subraces[1]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s2">
                        {subraces[1]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s3" value={subraces[2]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s3">
                        {subraces[2]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s4" value={subraces[3]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s4">
                        {subraces[3]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s5" value={subraces[4]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s5">
                        {subraces[4]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s6" value={subraces[5]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s6">
                        {subraces[5]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s7" value={subraces[6]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s7">
                        {subraces[6]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s8" value={subraces[7]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s8">
                        {subraces[7]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s9" value={subraces[8]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s9">
                        {subraces[8]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s10" value={subraces[9]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s10">
                        {subraces[9]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s11" value={subraces[10]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s11">
                        {subraces[10]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s12" value={subraces[11]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s12">
                        {subraces[11]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s13" value={subraces[12]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s13">
                        {subraces[12]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s14" value={subraces[13]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s14">
                        {subraces[13]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s15" value={subraces[14]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s15">
                        {subraces[14]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s16" value={subraces[15]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s16">
                        {subraces[15]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s17" value={subraces[16]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s17">
                        {subraces[16]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s18" value={subraces[17]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s18">
                        {subraces[17]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s19" value={subraces[18]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s19">
                        {subraces[18]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s20" value={subraces[19]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s20">
                        {subraces[19]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s21" value={subraces[20]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s21">
                        {subraces[20]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s22" value={subraces[21]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s22">
                        {subraces[21]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s23" value={subraces[22]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s23">
                        {subraces[22]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s24" value={subraces[23]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s24">
                        {subraces[23]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s25" value={subraces[24]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s25">
                        {subraces[24]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s26" value={subraces[25]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s26">
                        {subraces[25]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s27" value={subraces[26]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s27">
                        {subraces[26]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="subraces" id="s28" value={subraces[27]} onClick={props.handleSubrace}></input>
                    <label className="form-check-label" htmlFor="s28">
                        {subraces[27]}
                    </label>
                </div>
            </div>
            <div className="d-flex flex-column flex-justify-content ms-3">
                <h6 className="display-6">Skills</h6>
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
            </div>
            <button className="btn btn-primary">Add</button>
            <button className="btn btn-dark">Substract</button>
            <button className="btn btn-warning" onClick={props.handleSubmit}>Submit</button>
        </div>
    );
}

Sandbox.propTypes = {
    handleSubmit: PropTypes.func,
    handleStr: PropTypes.func,
    handleDex: PropTypes.func,
    handleInt: PropTypes.func,
    handleWis: PropTypes.func,
    handleChar: PropTypes.func,
    Dsc: PropTypes.string,
    Bg: PropTypes.string,
    handleDsc: PropTypes.func,
    handleBg: PropTypes.func,
    Class: PropTypes.string,
    handleClass: PropTypes.func,
    handleSkill: PropTypes.func,
    skill: PropTypes.string,
    handleSubrace: PropTypes.func,
    subrace: PropTypes.string,
    handleRace: PropTypes.func,
    race: PropTypes.string
}