import { useEffect, useState } from "react";

const useDrinkMenu = (letter) => {
    const [drinks, setDrinks] = useState(null);

    useEffect(() => {
        fetchDrinkMenu();
    }, [letter]);


    const fetchDrinkMenu = async () => {
        const fetchData = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f="+letter);
        const json = await fetchData.json();
        setDrinks(json.drinks);
    }

    return drinks;
    
}

export default useDrinkMenu;