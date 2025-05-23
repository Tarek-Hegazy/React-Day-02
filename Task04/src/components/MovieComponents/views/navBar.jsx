import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" exact activeClassName="active">
                Home
            </NavLink>
            <NavLink to="/movies" activeClassName="active">
                Movies
            </NavLink>
            <NavLink to="/tv-shows" activeClassName="active">
                TV Shows
            </NavLink>
            <NavLink to="/actors" activeClassName="active">
                Actors
            </NavLink>
        </nav>
    );
};

export default NavBar;