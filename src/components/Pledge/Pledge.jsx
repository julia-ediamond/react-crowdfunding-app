import { React, Fragment, useState, useEffect } from "react";
import { Grid, Button, Typography, Input, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useParams } from "react-router-dom";

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

const Pledge = (props) => {
  const classes = useStyles();
  const { refreshProjectData } = props;
  const { id } = useParams();
  const [makePledge, setMakePledge] = useState({
    amount: "",
    comment: "",
    anonymous: undefined,
    project_id: id,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    console.log("This is pledge stuff", value);
    setMakePledge((prevPledge) => {
      return {
        ...prevPledge,
        [id]: value,
      };
    });
  };

  const postData = async () => {
    console.log("Im posting a pledge");
    const token = window.localStorage.getItem("token");
    console.log("token", token);
    const response = await fetch(`${process.env.REACT_APP_API_URL}pledges/`, {
      method: "post",
      headers: {
        Authorization: `Token ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(makePledge),
    });
    console.log(makePledge);
    refreshProjectData();
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData().then((response) => {
      console.log("response from our API --------", response);
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
        <Grid container justifyContent="center">
          <Typography variant="h4">
            Make your pledge for project
          </Typography>
        </Grid>

        <form className={classes.form} noValidate>
          <Grid className={classes.formGroup} item xs={12}>
            <InputLabel className={classes.formLabel} htmlFor="username">
              Amount:
            </InputLabel>
            <Input
              className={classes.formInput}
              type="text"
              id="amount"
              onChange={handleChange}
            />
          </Grid>
          <Grid className={classes.formGroup} item xs={12}>
            <InputLabel className={classes.formLabel} htmlFor="username">
              Comment:
            </InputLabel>
            <Input
              className={classes.formInput}
              type="text"
              id="comment"
              onChange={handleChange}
            />
          </Grid>
          <Grid container justifyContent="center">
            <Button
              color="primary"
              onClick={handleSubmit}
              variant="contained"
              type="submit"
            >
              Make a pledge
            </Button>
          </Grid>
        </form>
      </Grid>
    </Fragment>
  );
};

export default Pledge;
