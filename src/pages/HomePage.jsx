import { React, Fragment, useState, useEffect } from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";
import { makeStyles } from "@material-ui/styles";
import { Grid, Paper, Typography, AppBar } from "@material-ui/core";
import { ControlCameraOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  
  root: {
    
  },
  title: {
    color: 'black',
  },
}));

function HomePage() {
  const classes = useStyles();
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    //access .env
    fetch(`${process.env.REACT_APP_API_URL}projects/`)
      .then((results) => {
        console.log("results:", results)
        
      return results.json()
      ;})
      .then((data) => {
      console.log("data:", data)
      setProjectList(data);
      });
  }, []);
  //[] empty array means run when the page loads, we want put hte data into the project list
  return (
    <Fragment>
      <Grid className={classes.root}>
        <Grid container justifyContent="center">
          <Typography variant="h2" className={classes.title}>This is homepage</Typography>
        </Grid>
        <Grid container justifyContent="center" spacing={2}>
          {projectList.map((project) => {
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
};

export default HomePage;
