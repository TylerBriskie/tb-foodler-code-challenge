
import React from "react";


// LOCAL IMPORTS

import './SearchBar.css'

const SearchBar = props => {


    // HARD CODED ARRAY OF STATES TO SAVE TIME, IDEALLY THESE WOULD BE OBJECTS WITH A VALUE, DISPLAY NAME, ETC, COMING FROM A SINGLE SOURCE OF TRUTH.
    const states = ['All States','AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 
        'KS', 'KY', 'LA', 'ME', 'MD,', 'MA', 'MI', 'MN','MS','MO','MT', 'NE', 'NV', 'NH', 'NH', 'NM', 'NY', 'NC', 'ND', 'OH',
        'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
    ]


    return (
        <div id="search-filter-component" className="container">
            <label>
                <input
                    placeholder="search..."
                >
                     
                </input>
                <button>
                    Search
                </button>
            </label>
            <select>
                {states.map(state => 
                    <option value={state}>
                        {state}
                    </option>    
                )}

            </select>
        </div>
    );
};

export default SearchBar;