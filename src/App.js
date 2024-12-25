import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import Error from './components/Error';
import About from './components/About';
import Contact from './components/Contact';

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from './components/RestaurantMenu';
import useOnlineStatus from './utils/useOnlineStatus';
import Offline from './components/Offline';
const App = () => {
    

    const onlineStatus = useOnlineStatus();
    if(!onlineStatus){
        return <Offline />;
    }
    return  (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about-us",
                element: <About />
            },
            {
                path: "/contact-us",
                element: <Contact bmenu="Home > Contact"/>
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
// root.render(<App />);