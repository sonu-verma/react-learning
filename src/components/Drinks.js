import { useState } from "react";
import useDrinkMenu from "../utils/useDrinkMenu";
import DrinkCard from "./DrinkCard";
import Shimmer from "./Shimmer";

const Drinks = () => {

    const drinks  = useDrinkMenu();
    console.log(drinks);
    return <>
        {
           drinks ? (
            <div className='flex flex-wrap'>
            {
                drinks?.map((drink)=>{
                    return <DrinkCard key={drink.idDrink} drink={drink} />
                })
            } 
            </div> 
            ) : <Shimmer type="list" />
        }
    </>
}

export default Drinks;