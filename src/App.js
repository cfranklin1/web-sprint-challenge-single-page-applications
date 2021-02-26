import React from "react";
import Home from "./components/Home";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './App.css';

const App = () => {
  return (
   
    <>
      <Router>
      {/*---links---*/}
      <nav className="navbar">
        
          <Link to="/">Home</Link>
        
      </nav>
      {/*---routes---*/}
      <div className="App">   
        <Route exact path="/" component={Home} />
      </div>
      </Router>
    </>
  );
};
export default App;
