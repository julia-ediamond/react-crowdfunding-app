import { React, Fragment, useState, useEffect } from "react";
import { oneProject } from "../../data";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Grid, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    width: "100%",
  },
  media: {
    height: 140,
  },
  title: {
    color: theme.palette.primary.main,
  },
  projectName: {
       
  },
}));

function ProjectCard(props) {
  const classes = useStyles();
  const { projectData } = props;
  return (
    <Fragment>
      <Grid container item xs>
        <Grid container xs={4}>
          <Link className="link" to={`/project/${projectData.id}`} style={{ textDecoration: 'none' }}>
            <Grid container>
                
              <img alt="projectData" src={projectData.image} />
              
            </Grid>
            <Grid className={classes.projectName} container justifyContent="center">
              <Typography variant="h5" color="textSecondary">{projectData.title}</Typography>
            </Grid>
          </Link>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default ProjectCard;
