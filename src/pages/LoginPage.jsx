import { React, Fragment } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import {
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  title: {
    color: "black",
    margin: theme.spacing(3),
  },
  topIcon: {
    marginTop: theme.spacing(2),
  }
}));

function LoginPage() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid>
      <Grid className={classes.topIcon} container justifyContent="center">
            <ImportantDevicesIcon fontSize="large" />
          </Grid>
          <Grid container justifyContent="center">
            <Typography variant="h2" className={classes.title}>
              Code for good
            </Typography>
          </Grid>
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
