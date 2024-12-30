import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { IMG_URL, RESTO_URL } from '../utils/constants';
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {

    const  { id } = useParams();
    
    const restInfo = useRestaurantMenu(id);

    const [chooseCategory, setChooseCategory] = useState(null);

    if(restInfo.length === 0) return <Shimmer type='page' />

    const { name, avgRatingString, costForTwoMessage, locality, areaName, cuisines, totalRatingsString,sla } =  restInfo?.cards[2].card?.card?.info;


    const { carousel } = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const filterCardRecommanded = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter( restRecom => restRecom?.card?.card?.title === "Recommended" )
     
    const { card } =  filterCardRecommanded.length > 0 ? filterCardRecommanded[0]?.card : [];
    


    const categories = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (category) => category.card?.["card"]?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" 
    )
    // return false;
    return  (
        <div className='m-5 mx-60'>
            <div className="title">
                <h2 className="font-bold">{ name }</h2>
            </div>
            <div className='shimmer-page-title'>
                <div>
                    <span>{ avgRatingString } ({totalRatingsString})</span>
                    <span> - {costForTwoMessage}</span>
                </div>
                <div className="cuisines" style={ {marginTop: "10px", fontSize: "15px", padding: "1px"} }>
                    {cuisines.join(",")}
                </div>
                <div className="mt-5 mb-2">
                    <span>{ areaName }, ({ locality })</span>
                    <span>{ sla?.slaString }</span>
                </div>
            </div>
            { carousel?.length > 0 ? (
                <div>
                    <h2 className="font-bold text-2xl mt-8 mb-5">Top Picks</h2>
                    <div className='flex'>
                        {
                            carousel.map(
                                (topPick) => 
                                <div className="border border-gray-950 rounded-lg m-2 w-[441px]" key={topPick.bannerId}> 
                                    <img  className="h-[150px] w-[200px] rounded-md object-fill"  src={IMG_URL + topPick.dish.info.imageId} /> 
                                </div>
                            )
                        }
                    </div>
                </div>
                ) : ''
            }
            
            {
                categories?.map(   (category, index) => 
                        // Controlled Component
                        <RestaurantCategory 
                            key={index} 
                            category={category?.card?.card} 
                            currentAccordion = { index == chooseCategory && true } 
                            setChooseCategory = { () => setChooseCategory(index)}
                        />
                )
            }
          
        </div>
    );
}

export default RestaurantMenu;