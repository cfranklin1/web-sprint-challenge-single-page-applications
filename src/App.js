import React from "react";
import Home from "./components/Home";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
   
    <div className="app-div">
      <Router>
      {/*---links---*/}
      <nav className="navbar">
        <Link to="/" className='pizza-button'><button >Pizza?</button></Link>
                  
      </nav>
      {/*---routes---*/}
      <div className="App">
         
        <Route exact path="/" component={Home} />
        
      </div>
      </Router>
    </div>
  );
};
export default App;
