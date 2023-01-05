import React from 'react';

import { BrowserRouter,Routes,  Route } from 'react-router-dom'

import Navbar  from './components/header/Navbar';
import NftCards from './components/cards/NftCards';
import Hero from './components/main/Hero';


// PAGES

import BuyNow from './Pages/Buy Now/BuyNow';
import Connect from './Pages/Connect/Connect';
import GetStarted from './Pages/Get Started/GetStarted';
import Team from './Pages/Team/Team';
import Benefits from './Pages/Benefits/Benefits';
import HowItWorks from './Pages/How It Works/HowItWorks';
import BambaNft from './Pages/Bamba Nft/BambaNft';







function App() {
  return (
     <BrowserRouter>
        <div className='App'>
          <Navbar />
        </div>
        
          <Routes>
             <Route path='/' element= {<Hero />} exact/>
             <Route path='/nft-cards' element= {<NftCards />}/>


              {/* Routes to Created  Pages */}

             <Route path='/bamba-nft' element= {<BambaNft />}/>
             <Route path='/how-it-works' element= {<HowItWorks />}/>
             <Route path='/benefits' element= {<Benefits />}/> 
             <Route path='/team' element= {<Team />}/> 

             <Route path='/get-started' element= {<GetStarted />}/>
             <Route path='/connect'  element = {<Connect />}/>
             <Route path='/buy-now' element = {<BuyNow />}/>
             


          </Routes>
        
     </BrowserRouter>
   
  );
}

export default App;
