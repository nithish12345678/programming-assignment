import React from 'react';
import './App.css';
import MapComponent from './components/Map';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <MapComponent data={data} />
    </div>
  );
}

export default App;