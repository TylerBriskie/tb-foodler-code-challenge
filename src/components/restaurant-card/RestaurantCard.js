
import React from "react";


// LOCAL IMPORTS
import GenreTag from '../genre-tag/GenreTag';
import './RestaurantCard.css'

const RestaurantCard = props => {


    const genreArray = props.restaurant.tags.split(',');
    const uniqueGenres = [...new Set(genreArray)]
  return (
    <div className="card-wrapper">
        <h2>        
            {props.restaurant.name}
        </h2>
          <div>

            <p>{props.restaurant.city}, {props.restaurant.state}</p>
            <p>{props.restaurant.telephone}</p>
          </div>
          <div className="tag-container">
            {uniqueGenres.map(tag => 
              <GenreTag tagName={tag}>ss</GenreTag>                
                
            )}
          </div>
       
    </div>
  );
};

export default RestaurantCard;