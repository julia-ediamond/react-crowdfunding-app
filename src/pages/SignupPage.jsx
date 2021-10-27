import { React, Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
}));

function signup() {
  return (
    <Fragment>
      <Typography variant="h4">Sign up</Typography>
    </Fragment>
  );
}

export default signup;
