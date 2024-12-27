import { useState } from "react";
import useDrinkMenu from "../utils/useDrinkMenu";
import DrinkCard from "./DrinkCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Drinks = () => {

    const [drinkLetter, setDrinkLetter] = useState('A');
    const drinks  = useDrinkMenu(drinkLetter);
    const letters = [];

    for (let i = 65; i <= 90; i++) {
        letters.push(String.fromCharCode(i));
    }

    return <>
        <div className="p-2">
            <h1 className="font-bold">Drinks</h1>
            <div className="p-2">
                {
                    letters.map((letter, index) =>{
                        return <a key={index} className={`p-2 font-bold hover:text-orange-400 ${drinkLetter == letter ? ' bg-orange-400 p-1 hover:text-white': ''}` } onClick={ () => setDrinkLetter(letter) }>{letter}</a>
                    })
                }
            </div>
        </div>
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