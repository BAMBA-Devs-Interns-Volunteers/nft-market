import React from 'react';

import { BrowserRouter,Routes,  Route } from 'react-router-dom'

import Navbar  from './components/header/Navbar';
import NftCards from './components/cards/NftCards';
import Hero from './components/main/Hero';



function App() {
  return (
     <BrowserRouter>
        <div className='App'>
          <Navbar />
        </div>
        
          <Routes>
            <Route path='/' element= {<Hero />} exact/>
             <Route path='/nft-cards' element= {<NftCards />}/>
             
          </Routes>
        
     </BrowserRouter>
   
  );
}

export default App;
