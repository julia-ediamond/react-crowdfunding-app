import { React, Fragment, useState } from "react";
import { Grid, Button, Input, InputLabel, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    padding: theme.spacing(4),
    width: "100%",
  },
  formGroup: {
    padding: theme.spacing(2),
  },
}));

const CreateProjectForm = (props) => {
  const classes = useStyles();
  const [projectInfo, setProjectInfo] = useState({
    projectTitle: "",
    projectDescription: "",
    projectCategories: "",
    projectGoal: "",
    projectImage: "",
    projectIsOpen: "",
    projectDate: "",
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


  const postData = async () => {
    const { refreshHomePage } = props;
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
    refreshHomePage();
    return response.json();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (window.localStorage.getItem('token')) {
    postData().then((response) => {
      console.log("response from our API --------", response);
      // window.localStorage.setItem('token', response.token);
      // history.push('/');
    });
    // }
  };
  return (
    <Fragment>
      <Grid
        className={classes.root}
        container
        justifyContent="center"
        spacing={3}
      >
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
              Is open:
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
      </Grid>
    </Fragment>
  );
};

export default CreateProjectForm;
