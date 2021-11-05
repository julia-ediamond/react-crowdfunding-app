import { React, Fragment, useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";
import { makeStyles } from "@material-ui/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    color: "black",
    margin: theme.spacing(3),
  },
  topIcon: {
    marginTop: theme.spacing(2),
  }
}));

function HomePage() {
  const classes = useStyles();
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    getAllProjects();
  }, []);

  const getAllProjects = () => {fetch(`${process.env.REACT_APP_API_URL}projects/`)
  .then((results) => {
    console.log("results:", results);

    return results.json();
  })
  .then((data) => {
    console.log("data:", data);
    setProjectList(data);
  });
};
  //[] empty array means run when the page loads, we want put hte data into the project list
  return (
    <Fragment>
      <Grid className={classes.root}>
        
          <Grid className={classes.topIcon} container justifyContent="center">
            <ImportantDevicesIcon fontSize="large" />
          </Grid>
          <Grid container justifyContent="center">
            <Typography variant="h2" className={classes.title}>
              Code for good
            </Typography>
          </Grid>

          <Grid container justifyContent="center" spacing={2}>
          {projectList.map((project) => {
            return (
              <Grid item xs={3} container justifyContent="center">
                <Paper>
                  <ProjectCard refreshHomePage={getAllProjects} projectData={project} />
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
