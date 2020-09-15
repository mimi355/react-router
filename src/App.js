
import "./styles.css";

import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)


const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
)


const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
)


const App = () =>{
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">

  
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>

          </ul>
         </nav>

    
           <Route  exact path="/" component={Home}/>
           <Route path="/category" component={Category}/>
           <Route path="/products" component={Products}/>

      </div>
    )
  }
  export default App;