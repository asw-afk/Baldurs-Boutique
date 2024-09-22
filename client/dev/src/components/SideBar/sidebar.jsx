import './sidebar.css';
import { useState } from 'react';

function setType(type) {
    localStorage.setItem('1', type);
};


export default function Sidebar() {
    return (
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark h-100 w-25">
                <div className="nav nav-pills flex-column ms-4 mb-auto w-75">
                    <button className="nav-item mt-5" onClick={setType('Race')}>
                        <span>Race</span>
                    </button>
                    <button className="nav-item mt-5" onClick={setType('Subrace')}>
                        <span>Subrace</span>
                    </button>
                    <button className="nav-item mt-5" onClick={setType('Background')}>
                        <span>Background</span>
                    </button>
                    <button className="nav-item mt-5" onClick={setType('Class')}>
                        <span>Class</span>
                    </button>
                    <button className="nav-item mt-5" onClick={setType('Spells')}>
                        <span>Spells</span>
                    </button>
                    <button className="nav-item mt-5" onClick={setType('Attributes')}>
                        <span>Attributes</span>
                    </button>
                    <button className="nav-item mt-5" onClick={setType('All')}>
                        <span>Show All</span>
                    </button>
                </div>
            </div>
    );
}