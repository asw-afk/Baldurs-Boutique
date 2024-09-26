import PropTypes from 'prop-types';
import {spells} from '../util/data';

export default function Spells(props) {
    return (
        <div className="d-flex flex-column bg-success bg-gradient text-white h-50 w-100">
                <div className="display-5 ms-5 text-center">
                    <span>Spells</span>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="backgrounds" id="b1" value={JSON.stringify(spells[0])} onClick={props.handleDsc}></input>
                    <label className="form-check-label" htmlFor="b1">
                        {spells[0].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="backgrounds" id="b2" value={JSON.stringify(spells[1])} onClick={props.handleDsc}></input>
                    <label className="form-check-label" htmlFor="b2">
                        {spells[1].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="backgrounds" id="b3" value={JSON.stringify(spells[2])} onClick={props.handleDsc}></input>
                    <label className="form-check-label" htmlFor="b3">
                        {spells[2].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="backgrounds" id="b4" value={JSON.stringify(spells[3])} onClick={props.handleDsc}></input>
                    <label className="form-check-label" htmlFor="b4">
                        {spells[3].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="backgrounds" id="b5" value={JSON.stringify(spells[4])} onClick={props.handleDsc}></input>
                    <label className="form-check-label" htmlFor="b5">
                        {spells[4].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="backgrounds" id="b6" value={JSON.stringify(spells[5])} onClick={props.handleDsc}></input>
                    <label className="form-check-label" htmlFor="b6">
                        {spells[5].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="backgrounds" id="b7" value={JSON.stringify(spells[6])} onClick={props.handleDsc}></input>
                    <label className="form-check-label" htmlFor="b7">
                        {spells[6].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="backgrounds" id="b8" value={JSON.stringify(spells[7])} onClick={props.handleDsc}></input>
                    <label className="form-check-label" htmlFor="b8">
                        {spells[7].bg}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="backgrounds" id="b9" value={JSON.stringify(spells[8])} onClick={props.handleDsc}></input>
                    <label className="form-check-label" htmlFor="b9">
                        {spells[8].bg}
                    </label>
                </div>
                <span className="mt-5 mb-3"><em><strong>Selection: </strong>{localStorage.getItem('spellbg')}</em></span>
                <p><em><strong>Description: </strong>{localStorage.getItem('spelldsc')}</em></p>   
            </div>
    );
}

Spells.propTypes = {
    Dsc: PropTypes.string,
    Bg: PropTypes.string,
    handleDsc: PropTypes.func,
    handleBg: PropTypes.func
}