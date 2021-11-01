import { React, Fragment, useState, useEffect } from "react";
import { Grid, Button, Typography, Input, InputLabel } from "@material-ui/core";
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

//   {
//     "amount": 14,
//     "comment": "Love this project!",
//     "anonymous": false,
//     "project_id": 2
//   }
const Pledge = () => {
  const classes = useStyles();
  

  return (
    <Fragment>
      <Grid
        className={classes.root}
        container
        justifyContent="center"
        spacing={3}
      >
        <Grid container justifyContent="center">
          <Typography variant="h4">Make your pledge</Typography>
        </Grid>
        {/* onSubmit={handleSubmit} */}
        <form className={classes.form} noValidate>
          <Grid className={classes.formGroup} item xs={12}>
            <InputLabel className={classes.formLabel} htmlFor="username">
              Amount:
            </InputLabel>
            <Input
              className={classes.formInput}
              type="text"
              id="amount"
              //   placeholder="Enter project name"
              //onChange={handleChange}
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
              //   onChange={handleChange}
            />
          </Grid>
        </form>
      </Grid>
    </Fragment>
  );
};

export default Pledge;
