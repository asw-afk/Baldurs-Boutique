import './sidebar.css';
import { Link } from 'react-router-dom';
// import { useState } from 'react';

export default function Sidebar() {
    return (
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark h-100 w-25 body">
                <div className="nav nav-pills flex-column ms-4 mt-5 w-75">
                    <Link className="nav-item" to= '/'>
                        Class
                    </Link>
                    <Link className="nav-item" to= '/race'>
                        Race
                    </Link>
                    <Link className="nav-item" to= '/subrace'>
                        Subrace
                    </Link>
                    <Link className="nav-item" to= '/background'>
                        Background
                    </Link>
                    <Link className="nav-item" to= '/skills'>
                        Skills
                    </Link>
                    <Link className="nav-item" to= '/spells'>
                        Spells
                    </Link>
                    <Link className="nav-item" to= '/attributes'>
                        Attributes
                    </Link>
                    <Link className="nav-item" to= '/sandbox'>
                        Edit All
                    </Link>
                </div>
            </div>
    );
}