import { React, Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SignupForm from "../components/Signup/signupForm";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
}));

function SignupPage() {
  return (
    <Fragment>
      <Grid container justifyContent="center">
      <Typography variant="h4">Sign up if you don't have an account yet</Typography>
      </Grid>
      <SignupForm />
    </Fragment>
  );
}

export default SignupPage;
