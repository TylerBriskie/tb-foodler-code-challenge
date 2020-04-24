
import React, { Component, createContext, useState } from "react";

export const RestaurantContext = createContext();

class RestaurantContextProvider extends Component {


    state = {
        loading: false,
        restaurants: [],
        searchTerm: '',
        states: ['All','AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 
        'KS', 'KY', 'LA', 'ME', 'MD,', 'MA', 'MI', 'MN','MS','MO','MT', 'NE', 'NV', 'NH', 'NH', 'NM', 'NY', 'NC', 'ND', 'OH',
        'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'],
        selectedState: 'All',
        tags: [],
        selectedTag: 'All',
    }

    setSelectedTag = async (tag) => {
        await this.setState({selectedTag: tag})
        this.getRestaurants(this.state.selectedState, this.state.selectedTag, this.state.searchTerm);
    }

    setSelectedState = async (state) =>{

        await this.setState({selectedState: state})
        this.getRestaurants(this.state.selectedState, this.state.selectedTag, this.state.searchTerm);

    }

    setFilter = async (searchTerm) => {
        await this.setState({searchTerm})
        // this.getRestaurants(this.state.selectedState, this.state.selectedTag, this.state.searchTerm);
    }


    getRestaurants = async (selectedState, selectedTag, searchTerm) => {
        this.setState({loading: true});

        const response = await fetch(
            process.env.REACT_APP_API_BASE_URL+'restaurants', 
            {
                headers: {
                    Authorization: process.env.REACT_APP_API_AUTH_HEADER
                }
            }
        )
        if (response.ok){
            const restaurantData = await response.json()
            let sortedRestaurants = restaurantData.sort((a,b) => {
                if (a.name < b.name){
                    return -1
                } else if (a.name > b.name){
                    return 1
                } else {
                    return 0;
                }
            });

            // FILTER BASED ON STATE
            if (selectedState && selectedState.toUpperCase() !== 'ALL'){
                sortedRestaurants = sortedRestaurants.filter(r => {

                    return r.state === selectedState;
                })
    
            }

            // FILTER BASED ON TAG
            if (selectedTag && selectedTag.toUpperCase() !== 'ALL'){
                sortedRestaurants = sortedRestaurants.filter(r => {
                    return r.tags.includes(selectedTag);
                })
            }

            // FILTER BASED ON SEARCH TERM
            if (searchTerm){
                const upperCaseSearch = searchTerm.toUpperCase();
                sortedRestaurants = sortedRestaurants.filter(r => {
                    return r.name.toUpperCase().includes(upperCaseSearch) ||
                        r.city.toUpperCase().includes(upperCaseSearch) ||
                        r.tags.toUpperCase().includes(upperCaseSearch)
                })
            }
        

            // LOOP THROUGH RESTAURANTS TO SET TAGS, IDEALLY THESE WOULD BE FOREIGN KEYS TO RESTAURANTS, COMING FROM THE SAME DB AS THE RESTAURANT LIST...
            let uniqueTags = ['All'];
            restaurantData.forEach(r => {
                const {tags} = r;

                const newTags = tags.split(',').filter(tag => 
                    !uniqueTags.includes(tag)
                );
                newTags.forEach(newTag => {
                    uniqueTags.push(newTag);
                })

            })

            // setTags(uniqueTags);
            this.setState({restaurants: sortedRestaurants, tags: uniqueTags, loading: false});
        } else {
            // ERROR FETCHING DATA
            console.log(response);
        }

        
    };

    render(){
        return (
            <RestaurantContext.Provider value={{
                ...this.state, 
                setFilter: this.setFilter,
                setSelectedTag: this.setSelectedTag,
                setSelectedState: this.setSelectedState,
                getRestaurants: this.getRestaurants}}>
            {this.props.children}
            </RestaurantContext.Provider>
        );
    }

};

export default RestaurantContextProvider;