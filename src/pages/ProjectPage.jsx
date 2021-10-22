import { React, Fragment, useState, useEffect } from "react";
import { oneProject } from "../data";
import { Grid, Paper, Typography, ListItem, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import DescriptionIcon from "@material-ui/icons/Description";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    width: "100%",
  },
  media: {
    height: 140,
  },
  title: {
    color: theme.palette.primary.main,
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
  const classes = useStyles();
  const { projectData } = props;
  return (
    <Fragment>
      <Grid className={classes.root}>
        <Grid item xs={12} container justifyContent="center">
          <Typography variant="h2" className={classes.title}>
            This is ProjectPage
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
                <Typography variant="h5">{oneProject.title}</Typography>
              </Grid>
              <Grid item xs={10} container justifyContent="center">
                <Avatar>
                  <DescriptionIcon />
                </Avatar>
                <Typography variant="body">{oneProject.description}</Typography>
              </Grid>
              <Grid container>
                <Avatar>
                  <LockOpenIcon />
                </Avatar>
                <Typography variant="h5">{`Status: ${oneProject.is_open}`}</Typography>
              </Grid>

              <Grid container>
                <Avatar>
                  <AttachMoneyIcon fontSize="small" />
                </Avatar>
                <Typography variant="h5">Pledges:</Typography>

                {/* key - index of data , while pledge data is actual datat*/}
                {oneProject.pledges.map((pledgeData, key) => {
                  return (
                    <ListItem>
                      {pledgeData.amount} from {pledgeData.supporter}
                    </ListItem>
                  );
                })}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default ProjectPage;
