import './App.css';
import React from "react";
import Helmet from "react-helmet"

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Header from "./components/Header/Header";
import Shops from "./components/Shops/Shops"
import Cart from "./components/Cart/CartPage"
import History from "./components/History/History";
import HomePage from "./components/HomePage/HomePage"

function App() {
  return (
      <Router>
          <div>
              <div className="container">
                  <Helmet>
                      <meta charSet="utf-8" />
                      <title>Delivery</title>
                      <meta name="viewport"
                            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                  </Helmet>
                  <Header/>

                  <Routes>
                      <Route  path="/" element={<HomePage/>}/>
                      <Route path="/shops/*" element={<Shops/>}/>
                      <Route path="/cart" element={<Cart/>}/>
                      <Route path="/history" element={<History/>}/>
                  </Routes>
              </div>
          </div>
      </Router>

  );
}

export default App;
