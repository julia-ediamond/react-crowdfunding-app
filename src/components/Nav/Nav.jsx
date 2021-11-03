import { React, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, IconButton, Button } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { NavLink } from "react-router-dom";

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
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [isLoggedIn, setIsLoggedIn] = useState(
    window.localStorage.getItem("token")
  );
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };
  return (
    <Grid className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.menuApp}>
          {/* <IconButton
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            //onClick={handleClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            {isLoggedIn && <MenuItem onClick={() => logout()}>Logout</MenuItem>}
            <MenuItem
              path
              to="/login"
              //onClick={handleClose}
            >
              Login
            </MenuItem> */}
          {/* </Menu> */}
          
            <Grid item xs={6} className={classes.menuItem}>
               <Button 
               color="inherit" 
               component={NavLink} 
               to="/"
               >
                  Home
                </Button>
            </Grid>
          

          <Grid item xs={6}>
            <Button 
            to="/login" 
            color="inherit" 
            component={NavLink}
            >
              Log in
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button 
            to="/signup" 
            color="inherit" 
            component={NavLink}
            >
              Sign up
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button 
            color="inherit" 
            component={NavLink} 
            to="/createproject"
            >
              Create project
            </Button>
          </Grid>
          <Grid item xs={6}>
              {isLoggedIn && 
              <Button 
              color="inherit" 
              onClick={() => logout()}
              >Logout</Button>}
          </Grid>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            //onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
export default Nav;
