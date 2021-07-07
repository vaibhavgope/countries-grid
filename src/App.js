import './App.css';
import React from 'react'
import { ThemeProvider, createTheme, CssBaseline } from '@material-ui/core';
import NavBar from './components/NavBar';
import FlagGrid from './components/FlagGrid';
import CountryPage from './components/CountryPage';
import { Route, Switch } from 'react-router-dom';


const theme = createTheme({
  typography: {
    allVariants: {
      color: 'hsl(200, 15%, 8%)'
    },
    fontFamily: 'Nunito Sans, sans-serif'
  },
  pallete: {
    text: {
      primary: 'hsl(200, 15%, 8%)',
      secondary: 'hsl(0, 0%, 98%)',
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: 'hsl(0, 0%, 98%)',
        },
      },
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <FlagGrid />
          </Route>
          <Route exact path='/countries/:code'>
            <CountryPage />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
