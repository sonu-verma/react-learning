import RestoCard from "./RestoCard"
import restoData from "../utils/restoData";
import { useState } from "react";

const Body = () => {

    const [restaurant, setRestaurant] = useState([]);

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    let filteredRestoCards = [];

    if(restoData.data.cards.length > 0){
         filteredRestoCards = restoData?.data?.cards?.filter(
            (appData) => !isEmpty(appData) && appData.card.card.id === 'restaurant_grid_listing'
        ) || [];
    }

    let restaurants = [];
    if(filteredRestoCards.length > 0){
        restaurants = filteredRestoCards[0].card.card.gridElements.infoWithStyle.restaurants
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
                                restaurants = restaurants.filter( (restaurant) => restaurant.info.avgRating > 4.3 ) 
                                console.log(restaurants)
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