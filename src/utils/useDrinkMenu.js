import { useEffect, useState } from "react";

const useDrinkMenu = () => {

    const [drinks, setDrinks] = useState(null);

    useEffect(() => {
        fetchDrinkMenu();
    }, []);


    const fetchDrinkMenu = async () => {
        const fetchData = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b");
        const json = await fetchData.json();
        setDrinks(json.drinks);
    }

    return drinks;
    
}

export default useDrinkMenu;