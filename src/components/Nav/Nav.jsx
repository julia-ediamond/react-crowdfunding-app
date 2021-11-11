import { React, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, IconButton, Button } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
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
  const [isLoggedIn, setIsLoggedIn] = useState(token);

    const logout = () => {
      localStorage.clear();
      setIsLoggedIn(null);
      history.push("/");
    };

  return (
    <Grid className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.menuApp}>
          <Grid item xs={6} className={classes.menuItem}>
            <Button color="inherit" component={NavLink} to="/">
              Home
            </Button>
          </Grid>
          {!isLoggedIn && 
          <Grid container>
          
            <Grid item xs={6}>
              <Button to="/login" color="inherit" component={NavLink}>
                Login
              </Button>
            </Grid>
          
            <Grid item xs={6}>
              <Button to="/signup" color="inherit" component={NavLink}>
                Sign up
              </Button>
            </Grid>
          </Grid>
        }
        
        {isLoggedIn && 
            <Grid container>
              <Grid item xs={6}>
                <Button color="inherit" component={NavLink} to="/createproject">
                  Create project
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button color="inherit" onClick={() => logout()}>
                  Logout
                </Button>
              </Grid>
            
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
            </Grid>
      }
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
