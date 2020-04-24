
import React from "react";


// LOCAL IMPORTS
import './GenreTag.css'

const GenreTag = props => {
 
    return (
    <div className="genre-tag-pill">
       {props.tagName}
    </div>
    );
};

export default GenreTag;