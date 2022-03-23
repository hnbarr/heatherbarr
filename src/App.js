import React,  { useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme"
import Contact from './components/Contact';
// import Home from './components/Home';
// import Media from './components/Media';
import Resume from './components/Resume';
import About from './components/About';
import NavTabs from './components/NavTabs';
// import Van from './components/Van';

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
        <div className="d-none d-md-block container-fluid" id="desktopAppView">
          <div className="row">
            <div className="col-12 d-print-none">
              <div id="themeToggle">
                <i className="fa fa-adjust" onClick={themeToggler}></i>
              </div>
            </div>
              <div className="col-12 col-md-6 d-print-none col-xl-4 d-flex align-items-center" id="desktopContact">
                <Contact/>
              </div>
              <div className="col-12 col-md-6 col-xl-8">
              <NavTabs />
                <div id="activePane">
                {/* <Home /> */}
                  <Switch>
                      <Route exact path='/' component={About}></Route>
                      {/* <Route path='/Home' component={Home}></Route>                     */}
                      <Route path='/her' component={About}></Route>    
                      <Route path='/work' component={Resume}></Route>                
                      {/* <Route path='/Stories' component={Media}></Route>  */}
                      {/* <Route path='/MyVan' component={Van}></Route>                 */}
                  </Switch>
                </div>
              </div>
          </div>
        </div>
        <div className="d-md-none container-fluid" id="mobileAppView">
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
                  <div id="activePane" className="mb-2">
                  {/* <Home /> */}
                    <Switch>
                        <Route exact path='/' component={About}></Route>
                        {/* <Route path='/Home' component={Home}></Route>                     */}
                        <Route path='/her' component={About}></Route>    
                        <Route path='/work' component={Resume}></Route> 
                        {/* <Route path='/Stories' component={Media}></Route>   */}
                        {/* <Route path='/MyVan' component={Van}></Route>                                              */}
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
