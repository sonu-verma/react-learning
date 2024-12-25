import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { IMG_URL, RESTO_URL } from '../utils/constants';
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {

    const  { id } = useParams();
    
    const restInfo = useRestaurantMenu(id);

    if(restInfo.length === 0) return <Shimmer type='page' />

    const { name, avgRatingString, costForTwoMessage, locality, areaName, cuisines, totalRatingsString,sla } =  restInfo?.cards[2].card?.card?.info;


    const { carousel } = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const filterCardRecommanded = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter( restRecom => restRecom?.card?.card?.title === "Recommended" )
     
    const { card } =  filterCardRecommanded.length > 0 ? filterCardRecommanded[0]?.card : [];
    
    console.log("render");
    // return false;
    return  (
        <div className='m-5 mx-80'>
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
                                <div className="border border-gray-950 rounded-lg m-2" key={topPick.bannerId}> 
                                    <img  className="h-[150px] w-[200px] mx-1 rounded-md"  src={IMG_URL + topPick.dish.info.imageId} height="50px" width="50px" /> 
                                </div>
                            )
                        }
                    </div>
                </div>
                ) : ''
            }
            
           { card && <div className='recommended-div'>
                <h2 className="font-bold text-2xl mt-8 mb-5">Recommended ({card?.itemCards?.length })</h2>
                {
                    card?.itemCards.map( (recommended) => {
                        return (
                                <div className="flex bg-gray-100 p-4 mb-2 rounded-lg hover:bg-gray-200 " key={recommended.card.info.id}>
                                    <div className="info-div leading-loose">
                                        <div>
                                            <span className={ !recommended.card.info.isVeg?'bg-red-500 p-1 rounded-xl text-sm': 'bg-green-300 px-3 rounded-xl text-sm'}>{recommended.card.info.isVeg?'Veg': 'Non Veg'}</span>
                                            <h4><b>{recommended.card.info.name}</b></h4>
                                            <h4><b>Rs.{recommended.card.info.defaultPrice /100 || recommended.card.info.price /100 }</b></h4>
                                            {
                                                (recommended.card.info.ratings.aggregatedRating.rating)? <h4 className="ratingH4" style={ { marginLeft: "0px"}}><span className="font-bold text-3xl text-green-600">*</span>{recommended.card.info.ratings.aggregatedRating.rating } ({recommended.card.info.ratings.aggregatedRating.ratingCountV2})</h4>: ""
                                            }
                                            
                                        </div>
                                        <div>
                                            <p>{ recommended.card.info.description }</p>
                                        </div>
                                    </div>
                                    <div className="img-div">
                                        <img className="h-[120px] w-[120px] mx-1 rounded-md"  src={ IMG_URL+recommended.card.info.imageId} />    
                                    </div>
                                </div>
                            )
                    })
                }
                
            </div>} 
           
        </div>
    );
}

export default RestaurantMenu;