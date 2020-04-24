
import React, {useContext, useEffect } from "react";
import HungryMan from '../../HungryMan.png';

// LOCAL IMPORTS

import './NoResults.css'

const NoResults = () => {

   
        return (

            <div className="container">
                <h2>
                    No restaurants were found matching those filters
                </h2>
                <img src={HungryMan}>
                </img>
            </div>
        )


};

export default NoResults;