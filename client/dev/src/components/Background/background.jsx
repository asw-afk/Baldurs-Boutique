// import './sandbox.css';
import PropTypes from 'prop-types';
import {backgrounds} from '../util/data';

export default function Background(props) {
    return (
        <div className="d-flex flex-column bg-success bg-gradient text-white h-50 w-100">
                <div className="display-5 ms-5 text-center">
                    <span>Background</span>
                </div>
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
                <span className="mt-5 mb-3"><em><strong>Selection: </strong>{localStorage.getItem('background')}</em></span>
                <p><em><strong>Description: </strong>{localStorage.getItem('description')}</em></p>   
            </div>
    );
}

Background.propTypes = {
    Dsc: PropTypes.string,
    Bg: PropTypes.string,
    handleDsc: PropTypes.func,
    handleBg: PropTypes.func
}