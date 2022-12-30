import React from 'react';
import Navbar  from './components/header/Navbar';
import NftCards from './components/cards/NftCards';
import Hero from './components/main/Hero';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <NftCards/> */}
    <Hero/>
    </div>
  );
}

export default App;
