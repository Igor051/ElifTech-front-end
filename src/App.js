import './App.css';
import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Header from "./components/Header/Header";
import Shops from "./components/Shops/Shops"

function App() {
  return (
      <Router>
          <div>
              <Header/>

              <Routes>
                  <Route path="/shops" element={<Shops/>}>
                  </Route>
              </Routes>

          </div>
      </Router>

  );
}

export default App;
