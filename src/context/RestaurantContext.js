
import React, { createContext, useState } from "react";

export const RestaurantContext = createContext();

const RestaurantContextProvider = props => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    const getRestaurants = async () => {
        
        const response = await fetch(
            process.env.REACT_APP_API_BASE_URL+'restaurants', 
            {
                headers: {
                    Authorization: process.env.REACT_APP_API_AUTH_HEADER
                }
            }
        )
        if (response.ok){
            const restaurantData = await response.json()
            setRestaurants(restaurantData);
        } else {
            // ERROR FETCHING DATA
            console.log(response);
        }

        
    };
    return (
        <RestaurantContext.Provider value={{ restaurants, loading, getRestaurants }}>
        {props.children}
        </RestaurantContext.Provider>
    );
};

export default RestaurantContextProvider;