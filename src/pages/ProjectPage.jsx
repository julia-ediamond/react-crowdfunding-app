import { React, Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { oneProject } from "../data";
import { Grid, Paper, Typography, ListItem, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import DescriptionIcon from "@material-ui/icons/Description";
import Pledge from '../components/Pledge/Pledge';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    width: "100%",
  },
  media: {
    height: 140,
  },
  title: {
    color: 'black',
  },
  projectCard: {
    width: "45",
    padding: theme.spacing(2),
  },
  projectImage: {
    padding: theme.spacing(3),
  },
}));

function ProjectPage(props) {
  const [projectData, setProjectData] = useState({ pledges: [] });
  const [isUpdating, setIsUpdating] = useState(undefined);
  const { id } = useParams();
  const classes = useStyles();
  const token = window.localStorage.getItem('token');
  //const { projectData } = props;


  const formattedDate = new Date(projectData?.date_created).toDateString()

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
      });
  }, [id]);

//update the project
  const handleChange = (e) => {
    const { id, value } = e.target;
    setProjectData({
      ...projectData,
      [id]: value,
    });
    console.log(projectData);
  };

  const handleSubmit = async (e) => {
    console.log("we start editing the project");
    e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}projects/${id}/`,
      {
        method: "put",
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      }
    );
    console.log("The response from API ------", response);
    setIsUpdating(false)
  };

  //validate that owner = the user who wants to update
  return (
    <Fragment>
      <Grid className={classes.root}>
        <Grid 
        item xs={12} 
        container justifyContent="center"
        >
          <Typography 
          variant="h2" 
          className={classes.title}
          >
            This is {projectData.title}
          </Typography>
        </Grid>
        <Grid 
        container 
        direction="column" 
        alignItems="center"
        >
          <Paper>
            <Grid item className={classes.projectCard}>
              <Grid container justifyContent="center">
                <img
                  className={classes.projectImage}
                  alt="projectData"
                  src={oneProject.image}
                />
              </Grid>
              <Grid container justifyContent="center">
                <Typography variant="h5">{projectData.title}</Typography>
              </Grid>
              <Grid container>
               <Typography variant="h5">{projectData.description}</Typography>
              </Grid>
              <Grid item>
              <Typography variant="h5">Created at: {formattedDate}</Typography>
              </Grid>
              <Grid container>
                {/* <Avatar>
                  <LockOpenIcon />
                </Avatar> */}
                <Typography variant="h5">{`Status:${projectData.is_open}`}</Typography>
              </Grid>

              <Grid container>
               
                <Typography variant="h5">Pledges:</Typography>

                {/* key - index of data , while pledge data is actual datat*/}
                {projectData.pledges.map((pledgeData, key) => {
                  return (
                    <ListItem>
                      {pledgeData.amount} from {pledgeData.supporter}
                    </ListItem>
                  );
                })}
              </Grid>

              <Grid container>
               
               <Typography variant="h5">Pledges total: {projectData.total}</Typography>

      
             </Grid>
             <Grid>
               <Button onClick={handleSubmit}>Edit the project</Button>
              </Grid>

              <Grid container> 
              <Pledge />
               </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default ProjectPage;
