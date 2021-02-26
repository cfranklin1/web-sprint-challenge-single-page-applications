import React from "react";
import Form from "./Form";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Delicious!</h1>
          <img
              className="home-img"
              src="https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg"
              alt="cheesey-pizza"
          />
      
      <Router>
        {/*---links---*/}
        <nav className="navbar">
          <Link to="/Form">Form</Link>
        </nav>
        {/*---routes---*/}
        <div className="App">   
          <Route path="/Form" component={Form} />
      </div>
      </Router>
    </>
  );
};
export default Home;