import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
// import components here
import Contact from './components/Contact';
import Home from './components/Home';
import Resume from './components/Resume';
import About from './components/About';
import Navbar from './components/Navbar';


const Router = () => {
    return (
        <div>
            <div className="row">
                <div className="col-12 d-md-none">
                    <Navbar/>
                </div>
                <div className="col-12 col-md-6">
                    <Contact />
                </div>
                <div className="col-12 col-md-6">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/' component={Home}></Route>
                            <Route path='/Home' component={Home}></Route>                    
                            <Route path='/About' component={About}></Route>    
                            <Route path='/Resume' component={Resume}></Route>                
                        </Switch>
                    </BrowserRouter>                
                </div>
            </div>
        </div>
    );
}

export default Router