import { React, Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { oneProject } from "../data";
import {
  Grid,
  Paper,
  Typography,
  ListItem,
  Button,
  Input,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import DescriptionIcon from "@material-ui/icons/Description";
import Pledge from "../components/Pledge/Pledge";
import EditProject from "../components/EditProject/EditProject";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    width: "100%",
  },
  media: {
    height: 140,
  },
  title: {
    color: "black",
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
  const [isEditing, setIsEditing] = useState(false);
  const { id: project_id } = useParams();
  //var [id, setId] = useState(props.match.params.id)
  const [errors, setErrors] = useState({});
  const classes = useStyles();
  const token = window.localStorage.getItem("token");
  //const { projectData } = props;
  const history = useHistory();

  const formattedDate = new Date(projectData?.date_created).toDateString();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${project_id}/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
      });
  }, [project_id]);

  //update the project
  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   console.log("We are updating the ", id, " to be: ", value)
  //   setProjectData({
  //     ...projectData,
  //     [id]: value,
  //   });
  //   console.log(projectData);
  // };

  // const handleSubmit = async (e) => {
  //   console.log("we start editing the project");
  //   e.preventDefault();
  //   const response = await fetch(
  //     `${process.env.REACT_APP_API_URL}projects/${project_id}/`,
  //     {
  //       method: "put",
  //       headers: {
  //         Authorization: `Token ${localStorage.getItem('token')}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         title: projectData.title,
  //         description: projectData.description,
  //         amount: projectData.amount,
  //         image: projectData.image,
  //         is_open: projectData.is_open
  //       }),
  //     }
  //   );
  //   console.log("The response from API ------", response);

  // };

  const deleteProject = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}projects/${project_id}/`, {
      method: "delete",
      header: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    history.push("/");
  };

  //to do validate that owner = the user who wants to update or delete

  const ReadProject = () => {
    return (
      <div>
        <h1>{projectData.title}</h1>
        <h2>{projectData.description}</h2>
        <h3>Created at: {new Date(projectData.date_created).toDateString()}</h3>
        <h3>Pledges:</h3>
        <ul>
          {projectData.pledges.map((pledgeData, key) => {
            return (
              <li key={key}>
                {pledgeData.amount} from {pledgeData.supporter}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <Fragment>
      <Grid className={classes.root}>
        <Grid item xs={12} container justifyContent="center">
          <Typography variant="h2" className={classes.title}>
            This is {projectData.title}
          </Typography>
        </Grid>
        <Grid container direction="column" alignItems="center">
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
                <Typography variant="h5">
                  Created at: {formattedDate}
                </Typography>
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
                <Typography variant="h5">
                  Pledges total: {projectData.total}
                </Typography>
              </Grid>
              {localStorage.getItem("token") && isEditing === false && (
                <Grid container justifyContent="center">
                  <Button variant="contained" onClick={() => setIsEditing(true)}>
                    Edit project
                  </Button>
                </Grid>
              )}

              {
                isEditing ? <EditProject /> : <ReadProject />
                // ? (
                //   <form>
                //     <Grid>
                //     <InputLabel>Title:</InputLabel>
                //     <Input
                //     value={projectData.title}
                //     type="text"
                //     id="title"
                //     onChange={handleChange}
                //     />
                //     </Grid>

                //     <Grid>
                //     <InputLabel>Description:</InputLabel>
                //     <Input
                //     value={projectData.description}
                //     type="text"
                //     id="description"
                //     onChange={handleChange}
                //     />
                //     </Grid>
                //     <Grid>
                //     <InputLabel>Goal:</InputLabel>
                //     <Input
                //     value={projectData.goal}
                //     type="text"
                //     id="goal"
                //     onChange={handleChange}
                //     />
                //     </Grid>

                //     <Grid>
                //     <InputLabel>Image:</InputLabel>
                //     <Input
                //     value={projectData.image}
                //     type="text"
                //     id="image"
                //     onChange={handleChange}
                //     />
                //     </Grid>

                //     <Grid>
                //       <Button onSubmit={handleSubmit}>Submit</Button>
                //     </Grid>
                //     <Grid>
                //       <Button onClick={() => setIsEditing(false)}>Cancel</Button>
                //      </Grid>
                //   </form>
                // )
                // : <ReadProject />
              }
              
              <Grid container>
                <Pledge />
              </Grid>

              <Grid container justifyContent="center">
              {localStorage.getItem("token") && (
                <Button variant="outlined" onClick={deleteProject}> Delete project</Button>
              )}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default ProjectPage;
