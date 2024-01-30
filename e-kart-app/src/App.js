import Home from "./components/Home"
import Cart from "./components/Cart"
import Header from "./components/Header"

import { BrowserRouter,Route,Routes } from "react-router-dom";


import './App.css';

function App() {
  return (
    <h1> hello world ........</h1>
    // <BrowserRouter>
    // <Header />
    //   <Routes>    
    //     <Route exact path="/" element={<Home />}  /> 
    //     <Route path="/cart" element={<Cart />}  /> 
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
