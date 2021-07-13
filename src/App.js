import './App.css';
import React, { useState } from 'react'
import { ThemeProvider, createTheme, CssBaseline } from '@material-ui/core';
import NavBar from './components/NavBar';
import FlagGrid from './components/FlagGrid';
import CountryPage from './components/CountryPage';
import { Route, Switch } from 'react-router-dom';
import { purple } from '@material-ui/core/colors';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  /*
    NOTE: Don't mix styles with component code
    1. Create a separate src/themes/global.js file for defining custom generated themes. 
    2. Now, import it in App.js and use it.
  */
  const theme = createTheme({
    typography: {
      allVariants: {
        color: "hsl(200, 15%, 8%)",
      },
      fontFamily: "Nunito Sans, sans-serif",
    },
    palette: {
      primary: {
        main: "hsl(0, 0%, 100%)",
      },
      secondary: {
        main: "hsl(0, 0%, 52%)",
      },
      text: {
        primary: "hsl(200, 15%, 8%)",
        secondary: "hsl(0, 0%, 98%)",
      },
      background: {
        default: "hsl(0, 0%, 98%)",
      },
      type: darkMode ? "dark" : "light",
    },
  });
  const darkTheme = createTheme({
    typography: {
      allVariants: {
        color: "hsl(0, 0%, 100%)",
      },
      fontFamily: "Nunito Sans, sans-serif",
    },
    palette: {
      primary: {
        main: "hsl(209, 23%, 22%)",
      },
      secondary: {
        main: "hsl(209, 33%, 15%)",
      },
      text: {
        primary: "hsl(0, 0%, 100%)",
        secondary: "hsl(0, 0%, 98%)",
      },
      background: {
        default: "hsl(207, 26%, 17%)",
      },
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
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
