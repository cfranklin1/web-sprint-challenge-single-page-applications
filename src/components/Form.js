import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Pizza from './Pizza';


export default function Form() {


  return (

         <div>
                <Router>
                    {/*---links---*/}
                    <nav className="pizza-nav">
                        <Link to="/Pizza">pizza!</Link>
                    </nav>
                    {/*---routes---*/}
                    <div className="pizza-div">   
                        <Route path="/Pizza">
                            <Pizza />
                        </Route>
                    </div>
                </Router>
                

         </div>


  );
};

