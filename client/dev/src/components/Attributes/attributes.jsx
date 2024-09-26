import './attributes.css';
import PropTypes from 'prop-types';
import {attributes} from '../util/data'

export default function Attributes(props) {
    return (
        <div className="d-flex flex-column bg-success bg-gradient text-white h-50 w-100">
            <div className="display-5 ms-5 text-center">
                <span>Attributes</span>
            </div>
            <div className="d-flex flex-column flex-justify-content">
            <div className='d-block mb-3'>
                    <div className='d-flex d-row'>
                        <span className="display-6">
                            {attributes[0]}
                        </span>
                        <div>
                        <button className="btn btn-primary mt-1 ms-5" id='increase' onClick={props.handleStr}>Add</button>
                        <button className="btn btn-danger mt-1 ms-3" id='decrease' onClick={props.handleStr}>Substract</button>    
                        </div>  
                    </div>
                </div>
                <div className='d-block mb-3'>
                    <div className='d-flex d-row'>
                        <span className="display-6">
                            {attributes[1]}
                        </span>
                        <div>
                        <button className="btn btn-primary mt-1 ms-5" id='increase' onClick={props.handleDex}>Add</button>
                        <button className="btn btn-danger mt-1 ms-3" id='decrease' onClick={props.handleDex}>Substract</button>    
                        </div>  
                    </div>
                </div>
                <div className='d-block mb-3'>
                    <div className='d-flex d-row'>
                        <span className="display-6">
                            {attributes[2]}
                        </span>
                        <div>
                        <button className="btn btn-primary mt-1 ms-2" id='increase' onClick={props.handleInt}>Add</button>
                        <button className="btn btn-danger mt-1 ms-3" id='decrease' onClick={props.handleInt}>Substract</button>    
                        </div>  
                    </div>
                </div>
                <div className='d-block mb-3'>
                    <div className='d-flex d-row'>
                        <span className="display-6">
                            {attributes[3]}
                        </span>
                        <div>
                        <button className="btn btn-primary mt-1 ms-5" id='increase' onClick={props.handleWis}>Add</button>
                        <button className="btn btn-danger mt-1 ms-3" id='decrease' onClick={props.handleWis}>Substract</button>    
                        </div>  
                    </div>
                </div>
                <div className='d-block mb-3'>
                    <div className='d-flex d-row'>
                        <span className="display-6">
                            {attributes[4]}
                        </span>
                        <div>
                        <button className="btn btn-primary mt-1 ms-4" id='increase' onClick={props.handleChar}>Add</button>
                        <button className="btn btn-danger mt-1 ms-3" id='decrease' onClick={props.handleChar}>Substract</button>    
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}

Attributes.propTypes = {
    handleStr: PropTypes.func,
    handleDex: PropTypes.func,
    handleInt: PropTypes.func,
    handleWis: PropTypes.func,
    handleChar: PropTypes.func
}