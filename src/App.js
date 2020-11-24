import React,  { useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme"
import Contact from './components/Contact';
import Home from './components/Home';
import Resume from './components/Resume';
import About from './components/About';
import NavTabs from './components/NavTabs';

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
    <GlobalStyles/>
    <BrowserRouter>
        <div className="d-none d-md-block">
          <div className="row">
            <div className="col-12">
              <div id="themeToggle">
                <i className="fa fa-adjust" onClick={themeToggler}></i>
              </div>
            </div>
              <div className="col-12 col-md-6" id="desktopContact">
                <Contact/>
              </div>
              <div className="col-12 col-md-6" id="activePane">
                <NavTabs/>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/Home' component={Home}></Route>                    
                    <Route path='/About' component={About}></Route>    
                    <Route path='/Resume' component={Resume}></Route>                
                </Switch>
              </div>
          </div>
        </div>
        <div className="d-md-none" id="mobileAppView">
            <div className="row" id="mobileTopPane">
              <div className="col-12 col-md-6">
                <div id="themeToggle">
                  <i className="fa fa-adjust" onClick={themeToggler}></i>
                </div>
                <Contact />
              </div>
            </div>
            <div>
            <div className="row">
                <div className="col-12 col-md-6">
                  <NavTabs/>
                  <div className="activePane">
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/Home' component={Home}></Route>                    
                        <Route path='/About' component={About}></Route>    
                        <Route path='/Resume' component={Resume}></Route>                
                    </Switch>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
