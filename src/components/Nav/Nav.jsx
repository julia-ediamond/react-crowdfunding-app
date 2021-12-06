import { React, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Button } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  title: {
    color: theme.palette.primary.main,
  },
  menuApp: {
    backgroundColor: theme.palette.primary.main,
  },
  menuItem: {
    padding: theme.spacing(2),
  },
  menuText: {
    color: theme.palette.primary.secondary,
  },
}));

function Nav() {
  const token = window.localStorage.getItem("token");
  const classes = useStyles();
  const history = useHistory();
  //!! turns token into boolean
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    history.push("/");
  };
  console.log("token", token);
  //listen to local storage changes
  useEffect(() => {
    function checkForToken() {
      const token = localStorage.getItem("token");
      // if (token) {
      //
      // }
      setIsLoggedIn(!!token);
      console.log("token", token);
    }
    //add an event listener that runs on storage events
    window.addEventListener("storage", checkForToken);
    console.log("token", token);
    //the effect hook returns a cleanup function that runs
    //when the component is unmounted, to remove our event listener

    return () => {
      window.removeEventListener("storage", checkForToken);
      console.log("token", token);
    };
  }, []);

  return (
    <Grid className={classes.root} justifyContent="center">
      <AppBar position="static">
        <Toolbar className={classes.menuApp}>
          <Grid container item xs={6} className={classes.menuItem} justifyContent="center">
            <Button color="inherit" component={NavLink} to="/">
              Home
            </Button>
          </Grid>

          {isLoggedIn ? (
            <Grid container justifyContent="center">
              <Grid container item xs={6} justifyContent="center">
                <Button color="inherit" component={NavLink} to="/createproject" >
                  Create project
                </Button>
              </Grid>
              <Grid container item xs={6} justifyContent="center">
                <Button color="inherit" onClick={() => logout()}>
                  Logout
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Grid container justifyContent="center">
              <Grid container item xs={6} justifyContent="center">
                <Button to="/login" color="inherit" component={NavLink}>
                  Login
                </Button>
              </Grid>

              <Grid container item xs={6} justifyContent="center">
                <Button to="/signup" color="inherit" component={NavLink}>
                  Sign up
                </Button>
              </Grid>
            </Grid>
          )}

          {/* <Grid container justifyContent="flex-end">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              </Grid> */}
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
export default Nav;

// const token = window.localStorage.getItem('token')
// const classes = useStyles()
// const history = useHistory()
// const [isLoggedIn, setIsLoggedIn] = useState(!!token)
// const logout = () => {
//   localStorage.clear()
//   setIsLoggedIn(false)
//   history.push('/')
// }
// // listen to local storage changes
// useEffect(() => {
//   function checkForToken() {
//     const token = localStorage.getItem('token')
//     setIsLoggedIn(!!token)
//   }
//   // add an event listener that runs on 'storage' events
//   window.addEventListener('storage', checkUserData)
//   // the effect hook returns a cleanup function that runs
//   // when the component is unmounted, to remove our event listener
//   return () => {
//     window.removeEventListener('storage', checkUserData)
//   }
// }, [])
// return (
//   <div>
//     {isLoggedIn ? 'logged in' : 'logged out'}
//   </div>
// )
// }
