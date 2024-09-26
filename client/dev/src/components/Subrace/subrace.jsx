import './subrace.css';
import PropTypes from 'prop-types';
import {subraces} from '../util/data';

export default function Subrace(props) {
    return (
        <div className="d-flex flex-column bg-success bg-gradient text-white h-50 w-100">
            <div className="display-5 ms-5 text-center">
                <span>Subrace</span>
            </div>
            <div className="d-flex flex-column flex-justify-content">
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
            
            <div className="display-6 mt-1 ms-3 mb-3"><span>Selection: {localStorage.getItem('subrace')}</span></div>
        </div>
    );
}

Subrace.propTypes = {
    handleSubrace: PropTypes.func,
    subrace: PropTypes.string
}