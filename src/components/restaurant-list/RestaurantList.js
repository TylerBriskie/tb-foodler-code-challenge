
import React, {useContext, useEffect } from "react";


// LOCAL IMPORTS
import { RestaurantContext} from '../../context/RestaurantContext';
import './RestaurantList.css'

const RestaurantList = props => {

    console.log('restaurant list props: ', props)
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
        <div>
            {restaurant.name}
        </div>
    )
  }</div>
  );
};

export default RestaurantList;