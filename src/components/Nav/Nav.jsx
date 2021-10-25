import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography, IconButton, Button } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  title: {
    color: theme.palette.primary.main,
  },
  menu: {
    color: theme.palette.primary.main,
  },
  menuItem: {
    padding: theme.spacing(2),
  },
  menuText: {
    color: theme.palette.primary.secondary,
  },
}));

function Nav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid className={classes.root}>
      <AppBar style={{ background: '#33ab9f' }} position="static">
        <Toolbar>
          <IconButton
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
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
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <Grid container className={classes.menu} justifyContent="flex-end">
            <Grid className={classes.menuItem}>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                <Button>
                <Link
                 color="inherit"
                  className={classes.menuText}
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  Home
                </Link>
                </Button>
              </Typography>
            </Grid>
            <Grid className={classes.menuItem}>
              <Typography variant="h6"></Typography>
            </Grid>
          </Grid>
          <Button color="inherit">Login</Button>
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
