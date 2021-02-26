import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Pizza from './Pizza';


export default function Form() {


  return (
    
    <>
     <div>
         <div>
             
                <Router>
                    {/*---links---*/}
                    <nav className="navbar">
                        <Link to="/Pizza">Pizza</Link>
                    </nav>
                    {/*---routes---*/}
                    <div className="App">   
                        <Route path="/Pizza" component={Pizza} />
                    </div>
                </Router>
                

         </div>
     </div>
    </>
  );
};

