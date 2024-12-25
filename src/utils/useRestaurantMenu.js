import { useEffect, useState } from "react";
import { RESTO_URL } from "./constants";

const useRestaurantMenu = (id) => {
    
    const [restInfo, setRestInfo] = useState([]);

    useEffect(() => {
        fetchRestaurantData()
    }, []);


    const fetchRestaurantData = async () => {
        const fetchRestoAPi = await fetch(RESTO_URL + id, {
        headers: {
            'x-cors-api-key': 'temp_742b14bb38b9ef92cabc9d5ff5102593'
            }
        });

        const jsonData = await fetchRestoAPi.json();
        setRestInfo(jsonData.data);
    }


    return restInfo;
}

export default useRestaurantMenu;