import React, { lazy, Suspense, useEffect, useState } from 'react'
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
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/AppStore';
// import Drinks from './components/Drinks';
import Cart from './components/Cart'

const Drinks = lazy( () => import('./components/Drinks') )
const App = () => {
    
    const [userInfo, setUserInfo] = useState(null);

    const onlineStatus = useOnlineStatus();
    if(!onlineStatus){
        return <Offline />;
    }


    // api call and valid user 

    useEffect( () => {
        const loggedInUser = {
            "id": 2,
            "name": "Taksh Verma"
        }

        setUserInfo(loggedInUser);
    }, []);
 
    return  (

        // after authentication want to use data
        <Provider store={appStore}>
            <UserContext.Provider value={ {loggedInUser: userInfo, setUserInfo} }>
                <div className='app'>
                {/* <   UserContext.Provider value={ {loggedInUser: { id: 3, name: "JG Verma"}} }> */}
                        <Header />
                    {/* </UserContext.Provider> */}
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
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
            },{
                path: "/drinks",
                element: <Suspense fallback={ <Shimmer type='list' /> }> <Drinks /> </Suspense>
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
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
// root.render(<App />);