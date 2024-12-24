import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { IMG_URL, RESTO_URL } from '../utils/constants';
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {

    const [restInfo, setRestInfo] = useState([]);
    const  { id } = useParams();
    useEffect(() => {
        fetchRestaurantData();
    }, []);

    const fetchRestaurantData = async () => {
        const restoData = await fetch( RESTO_URL + id,{
            headers: {
            'x-cors-api-key': 'temp_742b14bb38b9ef92cabc9d5ff5102593'
            }
          });
        const json = await restoData.json();
        setRestInfo(json.data);
    }

    if(restInfo.length === 0) return <Shimmer type='page' />

    const { name, avgRatingString, costForTwoMessage, locality, areaName, cuisines, totalRatingsString,sla } =  restInfo?.cards[2].card?.card?.info;


    const { carousel } = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    // const { card } = 

    const filterCardRecommanded = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter( restRecom => restRecom?.card?.card?.title === "Recommended" )
     
    console.log("filterCardRecommanded =>", filterCardRecommanded);
    const { card } =  filterCardRecommanded.length > 0 ? filterCardRecommanded[0]?.card : [];
    
    console.log("card =>", card);
    // return false;
    return  (
        <div className='restaurant-div'>
            <div className="title">
                <h2>{ name }</h2>
            </div>
            <div className='shimmer-page-title'>
                <div>
                    <span>{ avgRatingString } ({totalRatingsString})</span>
                    <span> - {costForTwoMessage}</span>
                </div>
                <div className="cuisines" style={ {marginTop: "10px", fontSize: "20px", padding: "1px"} }>
                    {cuisines.join(",")}
                </div>
                <div className="distance">
                    <span>{ areaName }, ({ locality })</span>
                    <span>{ sla?.slaString }</span>
                </div>
            </div>
            { carousel?.length > 0 ? (
                <div>
                    <h2>Top Picks</h2>
                    <div className='shimmer-page-time-rating'>
                        {
                            carousel.map((topPick) => <div key={topPick.bannerId}> <img className="topPickImg" src={IMG_URL + topPick.dish.info.imageId} height="50px" width="50px" /> </div>)
                        }
                        
                    </div>
                </div>
                ) : ''
            }
            
           { card && <div className='recommended-div'>
                <h2>Recommended ({card?.itemCards?.length })</h2>
                {
                    card?.itemCards.map( (recommended) => {
                        return (
                                <div className="recommended-card" key={recommended.card.info.id}>
                                    <div className="info-div">
                                        <div>
                                            <span>{recommended.card.info.isVeg?'Veg': 'Non Veg'}</span>
                                            <h4><b>{recommended.card.info.name}</b></h4>
                                            <h4><b>Rs.{recommended.card.info.defaultPrice /100 || recommended.card.info.price /100 }</b></h4>
                                            {
                                                (recommended.card.info.ratings.aggregatedRating.rating)? <h4 className="ratingH4" style={ { marginLeft: "12px"}}><span>*</span>{recommended.card.info.ratings.aggregatedRating.rating } ({recommended.card.info.ratings.aggregatedRating.ratingCountV2})</h4>: ""
                                            }
                                            
                                        </div>
                                        <div>
                                            <p>{ recommended.card.info.description }</p>
                                        </div>
                                    </div>
                                    <div className="img-div">
                                        <img src={ IMG_URL+recommended.card.info.imageId} />    
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