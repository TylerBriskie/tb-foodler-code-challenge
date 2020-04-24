
import React, {useContext, useEffect } from "react";
import SpinnerLogo from '../../spinner-gif.gif';

// LOCAL IMPORTS
import { RestaurantContext} from '../../context/RestaurantContext';
import RestaurantCard  from '../restaurant-card/RestaurantCard';
import NoResults from '../no-results/NoResults';

import './RestaurantList.css'

const RestaurantList = props => {

    const { loading, selectedState, selectedTag, searchTerm, restaurants, getRestaurants } = useContext(RestaurantContext)
    

    useEffect(() => {
        async function fetchData(){
             await getRestaurants(selectedState, selectedTag, searchTerm, 1);
        }
        fetchData();
        
    }, [])


    // SHOW SPINNER IF LOADING ...
    if (loading){
        return (
            <div className="container" id="spinner-container">
                <img className="loading-spinner" src={SpinnerLogo}/>
            </div>
        )
    }
    
    // SHOW NO RESULTS COMPONENT IF NO RESULTS ...
    else if (!loading && restaurants.length === 0){
        return (
            <NoResults />
          );

    // OTHERWISE, SHOW LIST OF RESTAURANTS
    } else {
        return (

            <div className="container" id="restauraunt-list-component">{
                restaurants.map(restaurant =>
                    <RestaurantCard key={restaurant.id} restaurant={restaurant}></RestaurantCard>
                )
            }</div>
        )
    }

};

export default RestaurantList;