import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {

    const [activeMenu, setActiveMenu] = useState("home");

    const  { loggedInUser }  = useContext(UserContext)

    const cart = useSelector((store) => store.cart.items);

    console.log("cart", cart);
    return (
        <div className='flex justify-between shadow-sm mb-2'>
            <div className='logo mx-2'>
                <img className="w-20" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?industry=Food" />
            </div>
            <div className='flex items-center'>
                <ul className='flex p-2'>
                    <li className={`p-5 ${activeMenu == 'home'? 'bg-orange-400 p-2':''}`}>
                        <Link to="/" onClick={()=> setActiveMenu("home")}>Home</Link>
                    </li>
                    <li className={`p-5 ${activeMenu == 'drinks'? 'bg-orange-400 p-2':''}`}>
                        <Link to="/drinks"  onClick={()=> setActiveMenu("drinks")}>Drinks</Link>
                    </li>
                    <li className={`p-5 ${activeMenu == 'about'? 'bg-orange-400 p-2':''}`}>
                        <Link to="/about-us"  onClick={()=> setActiveMenu("about")}>About Us</Link>
                    </li>
                    <li className={`p-5 ${activeMenu == 'contact'? 'bg-orange-400 p-2':''}`}>
                        <Link to="/contact-us"  onClick={()=> setActiveMenu("contact")}>Contact Us</Link>
                    </li>
                    <li className={`font-bold p-5 ${activeMenu == ''? 'bg-orange-400 p-2':''}`}>
                        <Link to="/cart">Cart { cart.length } items </Link>
                    </li>
                    <li className={`font-bold p-5 ${activeMenu == ''? 'bg-orange-400 p-2':''}`}>
                        { loggedInUser ? loggedInUser.name: "" }
                    </li>
                </ul>
            </div>
        </div>
    );
}


export default Header