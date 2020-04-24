import React from 'react';

// CONTEXT
import RestaurantContextProvider from './context/RestaurantContext';

// LOCAL IMPORTS
import MainHeader from './components/main-header/MainHeader';
import SearchBar from './components/search-bar/SearchBar';
import RestaurantList from './components/restaurant-list/RestaurantList';

import './App.css';
import Pagination from './components/pagination/Pagination';

function App() {


  return (
    <RestaurantContextProvider>
      <div className="App">
        <MainHeader />
        
        <SearchBar />

        <Pagination />
        <RestaurantList />

      </div>
    </RestaurantContextProvider>

  );
}

export default App;
