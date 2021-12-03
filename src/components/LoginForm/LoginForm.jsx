import React, { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Button, Input, InputLabel, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    padding: theme.spacing(4),
    width: "50%",
  },
  formGroup: {
    padding: theme.spacing(2),
  },
  form: {
    padding: theme.spacing(5),
  },
}));

function LoginForm() {
  const classes = useStyles();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
    console.log(credentials);
  };

  const postData = async (props) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        history.push("/");
        console.log(response);
      });
    }
  };
  return (
    <Fragment>
      <Grid container justifyContent="center">
        <Paper> 
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid className={classes.formGroup} item xs={12}>
            <InputLabel className={classes.formLabel} htmlFor="username">
              Username:
            </InputLabel>
            <Input
              className={classes.formInput}
              type="text"
              id="username"
              placeholder="Enter username"
              onChange={handleChange}
            />
          </Grid>

          <Grid className={classes.formGroup} item xs={12}>
            <InputLabel className={classes.formLabel} htmlFor="password">
              Password:
            </InputLabel>
            <Input
              className={classes.formInput}
              type="password"
              id="password"
              
              placeholder="Password"
              onChange={handleChange}
            />
          </Grid>
          <Grid container justifyContent="center">
            <Button color="primary" variant="contained" type="submit">
              Login
            </Button>
          </Grid>
        </form>
        </Paper>
      </Grid>
    </Fragment>
  );
}

export default LoginForm;
