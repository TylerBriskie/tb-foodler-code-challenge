
import React from "react";
import HungryMan from '../../HungryMan.png';

// LOCAL IMPORTS

import './NoResults.css'

const NoResults = () => {

   
        return (

            <div className="container" id="no-results-component">
                <h2>
                    No restaurants were found matching those filters
                </h2>
                <img src={HungryMan} alt="no resources found">
                </img>
            </div>
        )


};

export default NoResults;