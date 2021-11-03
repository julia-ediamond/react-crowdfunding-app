import { React, Fragment } from "react";
import CreateProjectForm from "../components/CreateProjectForm/CreateProjectForm";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  title: {
    color: "black",
    margin: theme.spacing(3),
  },
  topIcon: {
    marginTop: theme.spacing(2),
  }
}));

const CreateProject = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container className={classes.root}>
      <Grid className={classes.topIcon} container justifyContent="center">
            <ImportantDevicesIcon fontSize="large" />
          </Grid>
          <Grid container justifyContent="center">
            <Typography variant="h2" className={classes.title}>
              Code for good
            </Typography>
          </Grid>
        <Grid container justifyContent="center">
          <Typography variant="h4">Create your project</Typography>
        </Grid>
        <Grid container justifyContent="center">
          <CreateProjectForm />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default CreateProject;
