
import React, { useContext, useEffect } from "react";
import { RestaurantContext} from '../../context/RestaurantContext';


// LOCAL IMPORTS

import './SearchBar.css'

const SearchBar = props => {

    const { states, tags, searchTerm, selectedState, selectedTag, setFilter, setSelectedState, setSelectedTag, getRestaurants } = useContext(RestaurantContext)

    

    const selectState = async(event) => {
        setSelectedState(event.target.value);

    }

    const selectTag = event => {
        setSelectedTag(event.target.value)
    }

    const changeFilterHandler = event => {
        // console.log(event.target.value);
        setFilter(event.target.value);
    }

    const searchRestaurants = e => {
        e.preventDefault();
        getRestaurants(selectedState, selectedTag, searchTerm, 1);
    }

    const resetForm = () => {
        setFilter('');
        setSelectedTag('All');
        setSelectedState('All');    
        getRestaurants('All', 'All', '', 1);
    }

    return (

        <div id="search-filter-component" className="container">
            <h2>Filter Results</h2>
            <div className="search-filters">
                <form>
                    <div className="filter-input-section">
                        <label>
                            By Search Term
                
                        </label>
                        <input onChange={changeFilterHandler}
                                placeholder="search..."
                            >
                                
                        </input>
                    </div>
                   
                    <div className="filter-input-section">
                        <label>By State</label>
                        <select onChange={selectState}>
                                {states.map(state => 
                                    <option value={state}>
                                        {state}
                                    </option>    
                                )}

                        </select>
                    </div>

                    <div className="filter-input-section">
                        <label>By Tag</label>
                        <select onChange={selectTag}>
                            {tags.map(tag => 
                                <option value={tag}>
                                    {tag}
                                </option>    
                            )}

                        </select>
                    </div>

                    <div>
                    <button type="reset" onClick = {resetForm}>
                            Clear Values
                        </button>
                        <button onClick={searchRestaurants}>
                            Search
                        </button>
                    </div>
                </form>

            </div>

        
        </div>
    );
};

export default SearchBar;