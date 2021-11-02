import { React, Fragment } from "react";
import CreateProjectForm from "../components/CreateProjectForm/CreateProjectForm";
import { Grid, Typography } from "@material-ui/core";

const CreateProject = () => {
  return (
    <Fragment>
      <Grid>
        <Grid container justifyContent="center">
          <Typography variant="h4">Create project</Typography>
        </Grid>
        <Grid container justifyContent="center">
          <CreateProjectForm />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default CreateProject;
