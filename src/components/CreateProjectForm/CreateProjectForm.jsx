import { React, Fragment, useState } from "react";
import {
  Grid,
  Button,
  Input,
  InputLabel,
  Paper,
  TextareaAutosize,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    
    width: "100%",
  },
  formGroup: {
    padding: theme.spacing(2),
  },
  form: {
    padding: theme.spacing(6),
  },
}));

const CreateProjectForm = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { project_id } = useParams();
  const [projectInfo, setProjectInfo] = useState({
    title: "",
    description: "",
    categories: "",
    goal: "",
    image: "",
    is_open: "",
    date_created: new Date(),
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setProjectInfo((prevProject) => {
      return {
        ...prevProject,
        [id]: value,
      };
    });
  };


  const postData = async (props) => {
    //const { displayNewProject } = props;
    const token = window.localStorage.getItem("token");
    console.log("What is token: ", token);
    const response = await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
      method: "post",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title: projectInfo.title,
        date_created: new Date(),
        description: projectInfo.description,
        goal: projectInfo.goal,
        is_open: projectInfo.is_open,
        image: projectInfo.image,
      }),
    });
    //displayNewProject();
    
    console.log(projectInfo);
    history.push("/");
    return response.json();
    
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    postData().then((response) => {
      console.log("response from our API --------", response);
      //console.log("project_id --------", project_id);
    });
  };
  
  return (
    <Fragment>
      <Grid
        className={classes.root}
        container
        justifyContent="center"
        spacing={3}
      >
        <Paper> 
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid className={classes.formGroup} item xs={12}>
            <InputLabel className={classes.formLabel} htmlFor="username">
              Project name:
            </InputLabel>
            <Input
              className={classes.formInput}
              type="text"
              id="title"
              onChange={handleChange}
            />
          </Grid>
          <Grid className={classes.formGroup} item xs={12}>
            <InputLabel className={classes.formLabel} htmlFor="username">
              Category:
            </InputLabel>
            <Input
              className={classes.formInput}
              type="text"
              id="categories"
              onChange={handleChange}
            />
          </Grid>

          <Grid className={classes.formGroup} item xs={12}>
            <InputLabel className={classes.formLabel} htmlFor="password">
              Description:
            </InputLabel>
            <Input
              className={classes.formInput}
              type="text"
              id="description"
              onChange={handleChange}
            />
          </Grid>

          <Grid className={classes.formGroup} item xs={12}>
            <InputLabel className={classes.formLabel} htmlFor="password">
              Goal:
            </InputLabel>
            <Input
              className={classes.formInput}
              type="text"
              id="goal"
              onChange={handleChange}
            />
          </Grid>

          <Grid className={classes.formGroup} item xs={12}>
            <InputLabel className={classes.formLabel} htmlFor="password">
              Image:
            </InputLabel>
            <Input
              className={classes.formInput}
              type="url"
              id="image"
              onChange={handleChange}
            />
          </Grid>

          <Grid className={classes.formGroup} item xs={12}>
            <InputLabel className={classes.formLabel} htmlFor="password">
              Open:
            </InputLabel>
            <Input
              className={classes.formInput}
              type="text"
              id="is_open"
              onChange={handleChange}
            />
          </Grid>

          <Grid className={classes.formGroup} item xs={12}>
            <InputLabel className={classes.formLabel} htmlFor="password">
              Create at:
            </InputLabel>
            <Input
              className={classes.formInput}
              type="date"
              id="date_created"
              onChange={handleChange}
            />
          </Grid>

          <Grid container justifyContent="center">
            <Button color="primary" variant="contained" type="submit">
              Create project
            </Button>
          </Grid>
        </form>
        </Paper> 
      </Grid>
    </Fragment>
  );
};

export default CreateProjectForm;
