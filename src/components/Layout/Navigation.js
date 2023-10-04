import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {
    return <nav className={classes.navigation}>
        <ul>
            <li><NavLink to="/"
            >Home</NavLink></li>
           <li><NavLink to="/products"
            >Products</NavLink></li>
        </ul>
    </nav>
}

export default Navigation;

