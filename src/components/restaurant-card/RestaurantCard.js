
import React from "react";


// LOCAL IMPORTS

import './RestaurantCard.css'

const RestaurantCard = props => {


  return (
    <div className="card-wrapper">
        <h2>        
            {props.restaurant.name}
        </h2>
        
    </div>
  );
};

export default RestaurantCard;