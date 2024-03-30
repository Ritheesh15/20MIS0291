//import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Login from "./components/Login";
import products from "./components/products"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { useState } from "react";
function App(){
  return(

    <div classname="App">
      <Router>
        <Routes>
          <Route path="/" element={<AUpage />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/products" element={<products />}/>
          <Route path="/Home" element={<Home />}/>
          
  
        </Routes>
      </Router>

    </div>
  )
}



export default App;
