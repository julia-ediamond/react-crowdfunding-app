import { React, Fragment, useState } from "react";
import { Grid, Button, Input, InputLabel, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    padding: theme.spacing(4),
    width: "100%",
  },
  formGroup: {
    padding: theme.spacing(2),
  },
  form: {
    padding: theme.spacing(5),
  },
}));

function SignupForm () {
    const classes = useStyles();
    const history = useHistory();
    const initialValues = {
      username: "",
      email: "",
      password: ""
    };
    const [credentials, setCredentials] = useState(initialValues);
    const handleChange = (event) => {
      const { id, value } = event.target;
      setCredentials((prevCredentials) => {
        return {
        ...prevCredentials,
        [id]: value,
      }
      });
      console.log(credentials)
    } 

    const postData = async () => {
      console.log("I'm postin a user");
      setCredentials(initialValues)
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}users/`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials)
           
        }
      );
      return response.json();
    };

    const handleSubmit = (e) => {
      e.preventDefault();
        postData().then((response) => {
          console.log("Response from API---------", response)
          history.push("/login")
        });
    };

return (
    <Fragment>
      <Grid container justifyContent="center">
        <Paper>
        <form className={classes.form} noValidate>
          <Grid className={classes.formGroup} item xs={12}>
            <InputLabel className={classes.formLabel} htmlFor="username">
              Username:
            </InputLabel>
            <Input
              value={credentials.username}
              className={classes.formInput}
              type="text"
              id="username"
              onChange={handleChange}
            />
          </Grid>

          <Grid className={classes.formGroup} item xs={12}>
            <InputLabel className={classes.formLabel} htmlFor="username">
              Email:
            </InputLabel>
            <Input
              value={credentials.email}
              className={classes.formInput}
              type="text"
              id="email"
              
              onChange={handleChange}
            />
          </Grid>

          <Grid className={classes.formGroup} item xs={12}>
            <InputLabel className={classes.formLabel} htmlFor="password">
              Password:
            </InputLabel>
            <Input
              value={credentials.password}
              className={classes.formInput}
              type="password"
              id="password"
              
              onChange={handleChange}
            />
          </Grid>
          <Grid onClick={handleSubmit} container justifyContent="center">
            <Button color="primary" variant="contained" type="submit">
              Sign up
            </Button>
          </Grid>
        </form>
        </Paper>
      </Grid>
    </Fragment>
  );
}

export default SignupForm;
