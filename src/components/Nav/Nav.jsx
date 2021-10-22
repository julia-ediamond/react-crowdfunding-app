import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Grid, Menu, MenuItem, Typography, } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  title: {
    color: theme.palette.primary.main,
  },
  menu: {
    height: "10%",
    
  },
  menuItem: {
    padding: theme.spacing(2),
    
  },
  menuText: {
    color: theme.palette.primary.secondary,
  }
}));

function Nav() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid container className={classes.menu} justifyContent="center">
        <Grid className={classes.menuItem}>
          <Typography  variant="h6">
            <Link className={classes.menuText} style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </Typography>
        </Grid>
        <Grid className={classes.menuItem}>
          <Typography variant="h6">
            <Link style={{ textDecoration: "none" }} to="/project">
              Project
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Nav;
