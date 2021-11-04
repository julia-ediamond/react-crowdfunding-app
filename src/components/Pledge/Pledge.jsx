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

//   {
//     "amount": 14,
//     "comment": "Love this project!",
//     "anonymous": false,
//     "project_id": 2
//   }
const Pledge = () => {
  const classes = useStyles();
  //const { id: project_id } = useParams();
  const { id } = useParams();
  const [makePledge, setMakePledge] = useState({
    pledgeAmount: "",
    pledgeComment: "",
    pledgeAnonymous: undefined,
    pledgeProject_id: "id"
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    console.log("This is pledge stuff", value)
    setMakePledge((prevPledge) => {
      return {
        ...prevPledge,
        [id]: value,
      };
    });
  };

  const postData = async () => {
    
    console.log('Im posting a pledge');
    const token = window.localStorage.getItem('token');
    console.log("token", token)
    const response = await fetch(`${process.env.REACT_APP_API_URL}pledges/`, {
      method: 'post',
      headers: {
        "Authorization": `Token ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        amount: makePledge.amount,
        comment: makePledge.comment,
        anonymous: makePledge.anonymous,
        project_id: makePledge.project_id
      
      }),
    
    });
    console.log({
      amount: makePledge.amount,
      comment: makePledge.comment,
      anonymous: makePledge.anonymous,
      project_id: makePledge.project_id
    })
    return response.json()

    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData().then((response) => {
      console.log('response from our API --------', response);
      // window.localStorage.setItem('token', response.token);
      // history.push('/');
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
          <Typography variant="h4">Make your pledge for project with id {id}</Typography>
        </Grid>
        
        <form className={classes.form}  noValidate>
          <Grid className={classes.formGroup} item xs={12}>
            <InputLabel className={classes.formLabel} htmlFor="username">
              Amount:
            </InputLabel>
            <Input
              className={classes.formInput}
              type="text"
              id="amount"
              //   placeholder="Enter project name"
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
              //   placeholder="category"
              onChange={handleChange}
            />
          </Grid>
          <Grid className={classes.formGroup} item xs={12}>
            <InputLabel className={classes.formLabel} htmlFor="username">
              Anonymous pledge?:
            </InputLabel>
            <Input
              className={classes.formInput}
              type="text"
              id="anonymous"
              //   placeholder="category"
              onChange={handleChange}
            />
          </Grid>
          <Grid className={classes.formGroup} item xs={12}>
            <InputLabel className={classes.formLabel} htmlFor="username">
              Project_id:
            </InputLabel>
            <Input
              className={classes.formInput}
              type="text"
              id="project_id"
              //   placeholder="category"
              onChange={handleChange}
            />
          </Grid>
          <Grid container justifyContent="center">
            <Button color="primary" onClick={handleSubmit} variant="contained" type="submit">
              Make a pledge
            </Button>
          </Grid>
        </form>
      </Grid>
    </Fragment>
  );
};

export default Pledge;
