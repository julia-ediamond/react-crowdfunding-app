import { React, Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { 
    Grid, 
    Typography, 
    Button, 
    Input, 
    InputLabel 
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(3),
      width: "100%",
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
    formGroup: {
        padding: theme.spacing(2),
        
      },
  }));

  const EditProject = (props) => {
    
    const [projectInfo, setProjectInfo] = useState({ pledges: [] });
    const [isEditing, setIsEditing] = useState(false);
    const { id: project_id } = useParams();
    const classes = useStyles();
    const token = window.localStorage.getItem('token');
    //const { projectData } = props;
    const history = useHistory();

    //update the project
    const handleChange = (event) => {
      const { id, value } = event.target
      console.log("We are updating the ", id, " to be: ", value)
      setProjectInfo({
        ...projectInfo,
        [id]: value
        
      })
      console.log(project_id)
    }  

  const handleSubmit = async (e) => {
    console.log("we start editing the project");
    e.preventDefault();
    await fetch(
      `${process.env.REACT_APP_API_URL}projects/${project_id}/`,
      {
        method: "put",
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: projectInfo.title,
          description: projectInfo.description,
          goal: projectInfo.goal,
          image: projectInfo.image         
        }),
      }
    );
    console.log("The response from API ------", {
      title: projectInfo.title,
      description: projectInfo.description,
      goal: projectInfo.goal,
      image: projectInfo.image           
      });
    
  };
    return (
        <Fragment>
            <Grid container justifyContent="center">
            <Grid container justifyContent="center">
            <Typography variant="h4">Edit project</Typography>
            </Grid>
            <form onSubmit={handleSubmit}>
                    <Grid className={classes.formGroup}> 
                    <InputLabel>Title:</InputLabel>
                    <Input
                    value={projectInfo.title}
                    type="text"
                    id="title"
                    
                    onChange={handleChange}
                    /> 
                    </Grid>

                    <Grid className={classes.formGroup}> 
                    <InputLabel>Description:</InputLabel>
                    <Input 
                    value={projectInfo.description}
                    type="text"
                    id="description"
                    onChange={handleChange}
                   
                    />
                    </Grid>
                    <Grid className={classes.formGroup}> 
                    <InputLabel>Goal:</InputLabel>
                    <Input 
                    value={projectInfo.goal}
                    type="text"
                    id="goal"
                    onChange={handleChange}
                    
                    />
                    </Grid>

                    <Grid className={classes.formGroup}> 
                    <InputLabel>Image:</InputLabel>
                    <Input 
                    value={projectInfo.image}
                    type="text"
                    id="image"
                    onChange={handleChange}
                    
                    />
                    </Grid>
                    <Grid container>
                    <Grid item xs>
                      <Button color="primary" variant="outlined" type="submit" >Submit</Button>
                    </Grid>
                    <Grid>
                      <Button item xs variant="outlined" onClick={() => setIsEditing(false)}>Cancel</Button>
                    </Grid>
                    </Grid>
                  </form>
                  </Grid>
        </Fragment>
    )
  }

  export default EditProject;