import { React, Fragment, useState, useEffect } from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";
import { makeStyles } from "@material-ui/styles";
import { Grid, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  title: {
    color: theme.palette.primary.main,
  },
}));

function HomePage() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid className={classes.root}>
        <Grid container justifyContent="center">
          <Typography variant="h2" className={classes.title}>This is homepage</Typography>
        </Grid>
        <Grid container justifyContent="center" spacing={2}>
          {allProjects.map((project) => {
            return (
              <Grid item xs={3} container justifyContent="center">
                <Paper>
                  <ProjectCard projectData={project} />
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default HomePage;
