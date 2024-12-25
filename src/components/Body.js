import RestoCard from "./RestoCard"
import restoData from "../utils/restoData";
import { useEffect, useState } from "react";
import { isEmpty } from "../utils/common";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); 
    const [searchText, setSearchText] = useState("");
    const [isFiltered, setIsFiltered] = useState(false);

    const [showSearchText, setShowSearchText] = useState("");
    const [filteredParam, setFilteredParam] = useState([]);

    useEffect(()=> {
        fetchRestoData();
    }, []);

    const fetchRestoData = async () => {
        const data = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.411646&lng=72.7909839&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",{
            headers: {
            'x-cors-api-key': 'temp_742b14bb38b9ef92cabc9d5ff5102593'
            }
          });

        const json =await data.json();

        setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    
    /* Used for filter from api */

    // let filteredRestoCards = [];
    // let restaurantList = [];

    
    // if(restoData.data.cards.length > 0){
    //      filteredRestoCards = restoData?.data?.cards?.filter(
    //         (appData) => !isEmpty(appData) && appData.card.card.id === 'restaurant_grid_listing'
    //     ) || [];
    // }

    // if(filteredRestoCards.length > 0){
    //     restaurantList = filteredRestoCards[0].card.card.gridElements.infoWithStyle.restaurants;
    // }

    /* Used for filter from api */

    console.log("restaurants: ", restaurants);
    return (
        <div className='body'>
            <div className="flex m-5 justify-between">
               <div className='search'>
                    <input type='text' placeholder='Search' className='border border-black p-2 font-thin rounded-md w-96' value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                    <button 
                        className='bg-orange-300 p-2 rounded-md mr-0' 
                        onClick={
                                () => { 
                                        if(searchText.length > 0){
                                            const filterRestaurants  = restaurants.filter(restaurant => restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
                                            setFilteredRestaurants(filterRestaurants);
                                            setIsFiltered(true);
                                            setShowSearchText(searchText);

                                            // Add searchText to filteredParam if not already added
                                            setFilteredParam(pre => {
                                                if(searchText == "Top Ratings"){
                                                    return []
                                                }
                                                if(!pre.includes(searchText)){
                                                    return [...pre, searchText]
                                                }
                                                return pre
                                            })
                                        }
                                       
                                    }
                            } 
                    >Search</button>
                    {
                        isFiltered ? 
                        <span className="bg-yellow-600 m-2 p-2 rounded-sm items-center"><span className="p-2">{ filteredParam.length >0 ? filteredParam.join(", "): '' } {console.log("filteredParam",filteredParam) }</span>
                            <button 
                            className="bg-red-400 p-1.5 mr-[-9px]"
                            onClick={ (e) => {
                                e.preventDefault();
                                setSearchText('')
                                fetchRestoData()
                                setIsFiltered(false);
                                setFilteredParam([])
                        }}>X</button></span>
                        : ''
                    }
               </div>
               <div className="filter">
                    <button  className='bg-orange-300 p-2 rounded-md mr-0' 
                    onClick={
                        () => { 
                                const filterRestaurants  = filteredRestaurants.filter( 
                                    (restaurant) => restaurant.info.avgRating > 4.0 
                                );
                                setFilteredRestaurants(filterRestaurants)
                                setIsFiltered(true);
                                setShowSearchText("Top Ratings");
                                setFilteredParam(pre => {
                                    if(!pre.includes("Top Ratings")){
                                        return [...pre, "Top Ratings"]
                                    }

                                    return pre
                                })
                            }
                        }
                    >Top Rating Restaurant</button>
               </div>
            </div>
            {
                filteredRestaurants.length === 0 && !isFiltered ? <Shimmer type='list' /> : filteredRestaurants.length === 0 && isFiltered ? 'No Data found' : (
                    <div className='flex flex-wrap'>
                    {
                        filteredRestaurants.map((restaurant, index) =>
                            //  console.log(restaurant.info.)
                            <Link to={ "/restaurant/" + restaurant.info.id } className="restoCardLink"  key={restaurant.info.id}><RestoCard resto={restaurant.info} /></Link>
                        )
                    }
                    </div>
                )
            }
            
        </div>
    );
}


export default Body