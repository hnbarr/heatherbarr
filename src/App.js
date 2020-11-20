import React,  { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme"

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
    <button onClick={themeToggler}>Switch Theme</button>
        <div>
            <Router />
        </div>
      </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
