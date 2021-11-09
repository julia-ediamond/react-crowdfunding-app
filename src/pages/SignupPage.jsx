import { React, Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SignupForm from "../components/Signup/signupForm";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: theme.palette.primary.light,
  },
  title: {
    color: "black",
    margin: theme.spacing(3),
  },
  topIcon: {
    marginTop: theme.spacing(2),
  },
}));

function SignupPage() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid className={classes.topIcon} container justifyContent="center">
        <ImportantDevicesIcon fontSize="large" />
      </Grid>
      <Grid container justifyContent="center">
        <Typography variant="h2" className={classes.title}>
          Code for good
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Typography variant="h4">
          Sign up if you don't have an account yet
        </Typography>
      </Grid>
      <SignupForm />
    </Fragment>
  );
}

export default SignupPage;
