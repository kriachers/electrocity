import './App.scss';
import Header from './components/header/Header';
import Promotions from './components/promotions/Promotions';
import OfferPage from './pages/OfferPage';
import Footer from './components/footer/Footer';

import {Context} from './Context'
import { useState} from "react";

import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [offer, setOffer] = useState(""); 
  const makeOffer = (item) => {
    setOffer(item)
    console.log(offer)}
  return ( 
    <>
     <Context.Provider value={{offer, makeOffer}}>
       
          <BrowserRouter>
          <Header></Header>
            <Routes>
                <Route exact path="/" element={ <Promotions/> }></Route>
                <Route path="/offer" element={ <OfferPage/> }></Route>
            </Routes>
          </BrowserRouter>
        <Footer></Footer>
      </Context.Provider>
    </>
  );
}

export default App;