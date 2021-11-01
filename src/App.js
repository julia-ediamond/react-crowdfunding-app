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
import SignupPage from "./pages/SignupPage";
import CreateProject from "./pages/CreateProject";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    height: "100%",
  },
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
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
              <Route path="/signup">
                <SignupPage />
              </Route>
              <Route exact path="/createproject">
                <CreateProject />
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

export default (App)
