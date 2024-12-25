import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='header-container'>
            <div className='logo'>
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?industry=Food" />
            </div>
            <div className='navbar'>
                <ul className='nav-items'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/drinks">Drinks</Link>
                    </li>
                    <li>
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                        Cart
                    </li>
                </ul>
            </div>
        </div>
    );
}


export default Header