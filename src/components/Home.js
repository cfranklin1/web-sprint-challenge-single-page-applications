import React from "react";
import Form from "./Form";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header><h1>Lambda Eats</h1></header>
          <img
              className="home-img"
              src="https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg"
              alt="cheesey-pizza"
          />
      
      <Router>
        {/*---links---*/}
        <nav className="navbar">
          <Link to="/Form" className="build-link">Build your own...</Link>
        </nav>
        {/*---routes---*/}
        <div className="App">   
          <Route path="/Form">
            <Form />
          </Route>
        </div>
      </Router>
    </div>
  );
};
export default Home;