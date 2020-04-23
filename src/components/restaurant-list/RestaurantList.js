
import React, {useContext, useEffect } from "react";


// LOCAL IMPORTS
import { RestaurantContext} from '../../context/RestaurantContext';
import RestaurantCard  from '../restaurant-card/RestaurantCard';

import './RestaurantList.css'

const RestaurantList = props => {

    const { restaurants, getRestaurants } = useContext(RestaurantContext)

    useEffect(() => {
        async function fetchData(){
             await getRestaurants();
            
            
        }
        fetchData();
        
    }, [])

  return (
  <div className="container" id="restauraunt-list-component">{
    restaurants.map(restaurant =>
        <RestaurantCard key={restaurant.id} restaurant={restaurant}></RestaurantCard>
    )
  }</div>
  );
};

export default RestaurantList;