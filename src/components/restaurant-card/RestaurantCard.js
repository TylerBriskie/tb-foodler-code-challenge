
import React from "react";


// LOCAL IMPORTS
import GenreTag from '../genre-tag/GenreTag';
import './RestaurantCard.css'

const RestaurantCard = props => {

  // REMOVE DUPLICATES FROM ARRAY OF TAGS
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
              <GenreTag key={uniqueGenres.indexOf(tag)}tagName={tag}>ss</GenreTag>                
                
            )}
          </div>
       
    </div>
  );
};

export default RestaurantCard;