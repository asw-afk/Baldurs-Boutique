import './sandbox.css';

export default function Sandbox() {
    return (
        <div className="d-flex flex-column bg-success bg-gradient text-white h-50 w-100">
            <div className="dropdown mt-5">
                <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Presets
                </button>
            </div>
            <div className="dropdown mt-5">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Selection
                </button>
            </div>
            <span className="display-6 mt-5">Current Selection: </span>
        </div>
    );
}