import { React, Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Grid, Paper, Typography, ListItem, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Pledge from "../components/Pledge/Pledge";
import EditProject from "../components/EditProject/EditProject";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import { ColorizeOutlined, ViewColumnTwoTone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.primary.light,
  },
  title: {
    color: "black",
    margin: theme.spacing(3),
  },
  topIcon: {
    marginTop: theme.spacing(2),
  },
  projectCard: {
    padding: theme.spacing(2),
  },
  projectImage: {
    padding: theme.spacing(3),
  },
  pledges: {
    padding: theme.spacing(4),
  },
  pledgesContainer: {
    padding: theme.spacing(1),
    width: "50%",
  },
  makePledge: {
    padding: theme.spacing(1),
    
  },
  ProjectColumns: {
    width: "100%",
    padding: theme.spacing(3),
  },
  delete: {
    padding: theme.spacing(3),
  }
}));

function ProjectPage() {
  const [projectData, setProjectData] = useState({ pledges: [] });
  const [isEditing, setIsEditing] = useState(false);
  const { id: project_id } = useParams();
  //var [id, setId] = useState(props.match.params.id)
  const [error, setError] = useState(false);
  const classes = useStyles();
  const token = window.localStorage.getItem("token");
  //const { projectData } = props;
  const history = useHistory();

  const formattedDate = new Date(projectData?.date_created).toDateString();

  useEffect(() => {
    getProjectData();
  }, [project_id]);

  const getProjectData = (props) => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${project_id}/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
        console.log("This is projectData:", data);
      });
  };

  //delete project
  // This method sends a request to the API. In almost all cases, that is not an instantaneous action.
  // Therefore we declare this function as asynchronous, telling the function we will have to wait for something
  // to finish inside it.
  const deleteProject = async () => {
    setError(false);
    // This is our API request, which we need to tell our function to wait for using the key word await
    await fetch(`${process.env.REACT_APP_API_URL}projects/${project_id}/`, {
      method: "delete",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      if(error) {
        setError(true);
        return <div>You are not authorised to delete this project</div>;
      },
    });
    // Once we delete the project above, we then want to navigate back to the homepage
    // since the project we are looking at, doesn't exist anymore
    history.push("/");
  };
  //to do validate that owner = the user who wants to update or delete

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

        <Grid container spacing={3} justifyContent="center"  className={classes.ProjectColumns}>
          <Grid item xs>
            <Paper>
              <Grid item className={classes.projectCard}>
                <Grid container justifyContent="center">
                  <img
                    className={classes.projectImage}
                    alt="projectData"
                    src={projectData.image}
                  />
                </Grid>
                <Grid container justifyContent="center">
                  <Typography variant="h5">{projectData.title}</Typography>
                </Grid>
                <Grid container>
                  <Typography variant="h5">
                    {projectData.description}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5">
                    Created at: {formattedDate}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5">
                    Goal: $ {projectData.goal}
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography variant="h5">{`Status:${projectData.is_open}`}</Typography>
                </Grid>

                {localStorage.getItem("token") && isEditing === false && (
                  <Grid container justifyContent="center">
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() => setIsEditing(true)}
                    >
                      Edit project
                    </Button>
                  </Grid>
                )}

                {isEditing && (
                  <EditProject displayEditedProject={getProjectData} />
                )}

                <Grid className={classes.delete} container justifyContent="center">
                  {localStorage.getItem("token") && (
                    <Button variant="outlined" onClick={deleteProject}>
                      {" "}
                      Delete project
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={4} spacing={3} justifyContent="center" className={classes.pledgesContainer}>
            <Grid>
              <Paper>
                <Grid container className={classes.pledges}>
                  <Grid container textAlign="center">
                    <Typography variant="h4">Pledges:</Typography>
                  </Grid>

                  {/* key - index of data, while pledge data is actual data*/}
                  {projectData.pledges.map((pledgeData, key) => {
                    return (
                      <ListItem>
                        ${pledgeData.amount} with comment: {pledgeData.comment}
                      </ListItem>
                    );
                  })}

                  <Grid container>
                    <Typography variant="h5">
                      Total pledges received: ${projectData.total}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs className={classes.makePledge}>
              <Paper className={classes.pledgePaper}>
                <Grid>
                  <Pledge refreshProjectData={getProjectData} />
                </Grid>
              </Paper>
            </Grid>
          </Grid>


        </Grid>
      </Grid>
    </Fragment>
  );
}

export default ProjectPage;
