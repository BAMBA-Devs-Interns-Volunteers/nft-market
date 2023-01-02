import React from 'react';
import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import Navbar  from './components/header/Navbar';
import NftCards from './components/cards/NftCards';
import Hero from './components/main/Hero';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Navbar />}>
      <Route path='/' element= {<Hero />} />
      {/* <Route path='nft-cards' element= {<NftCards />} />  */}
    </Route>
  )
)

function App() {
  return (

    <RouterProvider router={router} />
  );
}

export default App;
