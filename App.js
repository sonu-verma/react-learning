import React from 'react'
import ReactDOM from 'react-dom/client'

/*
Header
    - Logo 
    - Navbar
Body
    - Search
    - Resto Container
        - Resto Card
            - Img, Name of Resto, Rating, Cuisine, delivery Time
Footer
    - Copyright
    - Links
*/

const Header = () => {
    return (
        <div className='header-container'>
            <div className='logo'>
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?industry=Food" />
            </div>
            <div className='navbar'>
                <ul className='nav-items'>
                    <li>
                        Home
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        Cart
                    </li>
                </ul>
            </div>
        </div>
    );
}


const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                <input type='text' placeholder='Search' className='search-input' />
                <button className='search-botton'>Search</button>
            </div>
            <div className='resto-container'>
                <RestoCard />
            </div>
        </div>
    );
}

const RestoCard = () => {
    return (
        <div className='resto-card'>
            <div className='resto-image'>
                <img src="https://i.pinimg.com/736x/63/bc/77/63bc77206180eb114cfb3aa61c11e86c.jpg" />
            </div>
            <div className='card-title'>
                Dummy Resto
            </div>
            <div className='time-rating'>
                <div className='rating'>
                    4.5 Start
                </div>
                <div className='timing'>
                    40-50 min.
                </div>
            </div>
            <div className='cuisine'>
                Abc, xyz
            </div>
            <div className='cuisine'>
                Nalasopara west
            </div>
        </div>
    );
}

const App = () => {
    return  (
        <div className='app'>
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);