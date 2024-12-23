import RestoCard from "./RestoCard"
import restoData from "../utils/restoData";
import { useEffect, useState } from "react";
import { isEmpty } from "../utils/common";
import Shimmer from "./Shimmer";

const Body = () => {

    let filteredRestoCards = [];
    let restaurantList = [];

    
    if(restoData.data.cards.length > 0){
         filteredRestoCards = restoData?.data?.cards?.filter(
            (appData) => !isEmpty(appData) && appData.card.card.id === 'restaurant_grid_listing'
        ) || [];
    }

    if(filteredRestoCards.length > 0){
        restaurantList = filteredRestoCards[0].card.card.gridElements.infoWithStyle.restaurants;
    }
    

    const [restaurants, setRestaurants] = useState([]);

    useEffect(()=> {
        fetchRestoData();
    }, []);

    const fetchRestoData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.411646&lng=72.7909839&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json =await data.json();

        setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(restaurants.length == 0){
        return <>
            <div className='body'>
                <div style={{ display:"flex", justifyContent: "space-between"}}>
                <div className='search'>
                        <input type='text' placeholder='Search' className='search-input' />
                        <button className='search-botton'>Search</button>
                </div>
                <div className="filter">
                        <button  className='search-botton' 
                        onClick={
                            () => { 
                                    setRestaurants(restaurants.filter( (restaurant) => restaurant.info.avgRating > 4.3 ))
                                }
                            }
                        >Top Rating Restaurant</button>
                </div>
                </div>
                <Shimmer />
            </div>
        </>
    }
    return (
        <div className='body'>
            <div style={{ display:"flex", justifyContent: "space-between"}}>
               <div className='search'>
                    <input type='text' placeholder='Search' className='search-input' />
                    <button className='search-botton'>Search</button>
               </div>
               <div className="filter">
                    <button  className='search-botton' 
                    onClick={
                        () => { 
                                setRestaurants(restaurants.filter( (restaurant) => restaurant.info.avgRating > 4.3 ))
                            }
                        }
                    >Top Rating Restaurant</button>
               </div>
            </div>
            <div className='resto-container'>
              {
                restaurants.map((restaurant, index) =>
                    //  console.log(restaurant.info.)
                    <RestoCard key={restaurant.info.id} resto={restaurant.info} /> 
                )
              }
            </div>
        </div>
    );
}


export default Body