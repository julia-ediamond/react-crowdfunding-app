import { React, Fragment } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import {
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
}));

function LoginPage() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid>
      <Grid container justifyContent="center">
      <Typography variant="h4">Login if you already have an account</Typography>
      </Grid>
      <Grid>
      <LoginForm />
      </Grid>
      </Grid>
    </Fragment>
  );
}

export default LoginPage;
