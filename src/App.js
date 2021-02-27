import React from "react";
import Home from "./components/Home";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './App.css';


const App = () => {
  return (
   
    <div className="app-div">
      <Router>
      {/*---links---*/}
      <nav className="navbar">
        <Link to="/"></Link>
                  
      </nav>
      {/*---routes---*/}
      <div className="App">
        <Switch>   
        <Route exact path="/" component={Home} />
        </Switch>
      </div>
      </Router>
    </div>
  );
};
export default App;
