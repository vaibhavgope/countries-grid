import './App.css';
import React, { useState } from 'react'
import { ThemeProvider, createTheme, CssBaseline } from '@material-ui/core';
import NavBar from './components/NavBar/NavBar';
import FlagGrid from './components/FlagGrid/FlagGrid';
import CountryPage from './components/CountryPage/CountryPage';
import { Route, Switch } from 'react-router-dom';
import globalTheme from './themes/global'

function App() {
  const [darkMode, setDarkMode] = useState(true);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <ThemeProvider theme={darkMode ? globalTheme(true) : globalTheme(false)}>
        <CssBaseline />
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Switch>
          <Route exact path="/">
            <FlagGrid />
          </Route>
          <Route exact path="/countries/:code">
            <CountryPage />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
