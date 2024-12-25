import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='flex justify-between shadow-sm mb-2'>
            <div className='logo mx-2'>
                <img className="w-20" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?industry=Food" />
            </div>
            <div className='flex items-center'>
                <ul className='flex p-2'>
                    <li className="p-5">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-5">
                        <Link to="/drinks">Drinks</Link>
                    </li>
                    <li className="p-5">
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li className="p-5">
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li className="p-5">
                        Cart
                    </li>
                </ul>
            </div>
        </div>
    );
}


export default Header