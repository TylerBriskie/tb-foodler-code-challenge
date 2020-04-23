import React from 'react';

// CONTEXT
import RestaurantContextProvider from './context/RestaurantContext';

// LOCAL IMPORTS
import MainHeader from './components/main-header/MainHeader';
import RestaurantList from './components/restaurant-list/RestaurantList';

import './App.css';

function App() {


  return (
    <RestaurantContextProvider>
      <div className="App">
        <MainHeader />
        <RestaurantList />
      </div>
    </RestaurantContextProvider>

  );
}

export default App;
