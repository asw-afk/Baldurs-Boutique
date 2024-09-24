import Navbar from '../UI/Navbar';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <Navbar
            links={[
                <Link key={1} className="nav-link text-light" to= "/">Welcome to Baldur's Boutique!</Link>
            ]}
        />
    );
}