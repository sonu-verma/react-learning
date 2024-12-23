import RestoCard from "./RestoCard"
import restoData from "../utils/restoData";
import { useEffect, useState } from "react";
import { isEmpty } from "../utils/common";
import Shimmer from "./Shimmer";

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
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.411646&lng=72.7909839&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

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

    return (
        <div className='body'>
            <div style={{ display:"flex", justifyContent: "space-between"}}>
               <div className='search'>
                    <input type='text' placeholder='Search' className='search-input' value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                    <button 
                        className='search-botton' 
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
                        <span className="clearedFilter"><span className="searchTextSpan">{ filteredParam.length >0 ? filteredParam.join(", "): '' } {console.log("filteredParam",filteredParam) }</span>
                            <button onClick={ (e) => {
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
                    <button  className='search-botton' 
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
                filteredRestaurants.length === 0 && !isFiltered ? <Shimmer /> : filteredRestaurants.length === 0 && isFiltered ? 'No Data found' : (
                    <div className='resto-container'>
                    {
                        filteredRestaurants.map((restaurant, index) =>
                            //  console.log(restaurant.info.)
                            <RestoCard key={restaurant.info.id} resto={restaurant.info} /> 
                        )
                    }
                    </div>
                )
            }
            
        </div>
    );
}


export default Body