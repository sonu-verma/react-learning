import { useState } from "react";
import useDrinkMenu from "../utils/useDrinkMenu";
import DrinkCard from "./DrinkCard";
import Shimmer from "./Shimmer";

const Drinks = () => {

    const drinks  = useDrinkMenu();

    return <>
        {
           
            <div className='resto-container'>
            {
                drinks?.map((drink)=>{
                    return <DrinkCard key={drink.idDrink} drink={drink} />
                })
            }
            </div> 
        }
    </>
}

export default Drinks;