import React from 'react';
import Navigation from './Components/Navigation';
import Home from './Components/Home';

function App() {
  return (

    <div className="App">
      <Navigation />
      <div className="content">
        <Home />

      </div>
    </div>
  );
}

export default App;
