import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar  from './components/header/Navbar';
import NftCards from './components/cards/NftCards';
import Hero from './components/main/Hero';



//  NAV PAGES
import Team from './Pages/Team/Team';
import Benefits from './Pages/Benefits/Benefits';
import HowItWorks from './Pages/How It Works/HowItWorks';







function App() {
  return (
     <BrowserRouter>
        <div className='App'>
          <Navbar />
        </div>
        
          <Routes>
             <Route  index element= {<Hero />}/>
             <Route path='/nft-cards' element= {<NftCards />}/>
          </Routes>
          <HowItWorks />
          <Benefits />
          <Team />
        
     </BrowserRouter>
   
  );
}

export default App;
