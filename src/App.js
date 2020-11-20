import React,  { useState } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'
import Router from './Router'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme"
import Contact from './components/Contact';

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
        <div className="row d-none d-md-block">
          <div className="col-12">
            <div id="themeToggle">
              <i className="fa fa-adjust" onClick={themeToggler}></i>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <Contact />
          </div>
        </div>
        <div>
        <div className="row d-md-none" id="mobileTopPane">
              <div className="col-12 col-md-6">
                <div id="themeToggle">
                  <i className="fa fa-adjust" onClick={themeToggler}></i>
                </div>
                <Contact />
              </div>
            </div>
            <Router />
        </div>
      </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
