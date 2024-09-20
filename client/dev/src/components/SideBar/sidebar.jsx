import './sidebar.css';

export default function Sidebar() {
    return (
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark h-100 w-25">
                <div className="nav nav-pills flex-column ms-4 mb-auto w-75">
                    <button className="nav-item mt-5">
                        <span>Race</span>
                    </button>
                    <button className="nav-item mt-5">
                        <span>Subrace</span>
                    </button>
                    <button className="nav-item mt-5">
                        <span>Background</span>
                    </button>
                    <button className="nav-item mt-5">
                        <span>Class</span>
                    </button>
                    <button className="nav-item mt-5">
                        <span>Spells</span>
                    </button>
                    <button className="nav-item mt-5">
                        <span>Attributes</span>
                    </button>
                    <button className="nav-item mt-5">
                        <span>Show All</span>
                    </button>
                </div>
            </div>
    );
}