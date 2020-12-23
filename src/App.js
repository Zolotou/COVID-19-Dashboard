import React from 'react';
import classes from './App.module.scss';
import Global from './components/GlobalSheet/GlobalSheet.jsx'
import GlobalSheetPerCountry from './components/GlobalPerCountry/GlobalPerCountry.jsx'
import Map from './components/Map/Map.js'


const App = () => {

  return (
    
    <div className="wrapper">
      <div className="wrapper__sheets-global">
        <Global />
        <GlobalSheetPerCountry />
      </div>
      <Map />
    </div>
  );
};


export default App;
