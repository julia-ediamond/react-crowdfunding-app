import React from "react";


import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import { makeStyles } from "@material-ui/styles";
import Nav from "./components/Nav/Nav.jsx";
import LoginPage from "./pages/LoginPage";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    height: "100%",
  },
  media: {
    height: 140,
  },
  title: {
    color: theme.palette.primary.main,
  },
  menu: {
    height: "40%",
  }
}));

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="root">
        <Router>
          <div>
            <Nav className="menu" />
            <Switch>
              <Route exact path="/project/:id">
                <ProjectPage />
              </Route>
              <Route path="/login">
                <LoginPage />
                
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
