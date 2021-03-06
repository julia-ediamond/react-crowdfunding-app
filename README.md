# Code for good 

This is a crowdfunding app named Code for good. It was built for learning purposes at She Codes Plus. This is a fullstack application built with React and React Material-UI on the frontend. It fetches data from REST API built with Django Rest Framework which is deployed on Heroku [See it here](https://quiet-hamlet-41512.herokuapp.com/projects/).

## Features

The application Code for good is being built. The current features are: 
1. Homepage displays all crowdfunding projects

![Homepage](/homep.png)

2. Users can signup/login/logout. Authentication is handled with a token

![Login form](/signup.png)

3. Users can see individual project details, pledge for chosen projects, see totals of pledges and comments of supporters. 

![Pledges](/pledges.png)

4. Project page allows users to create, edit and delete project. All operations work fine. Edit and delete UX is to be improved. 

![Edit project](/edit.png)

![Project page](/projectpage.png)

## Cepress tests
The app is covered by e2e tests with Cypress. 

![Tests](/cypress_tests.png)

### Features to be implemented next: 
1. Hide edit and delete buttons to those users who don't own projects. 
2.  Alter pledge posting
3. Alter project posting
4. Edit pledge
5. Edit/delete user profile.

There is a bug in displaying nav. Once a users logges in - the nav doesn't refresh automatically still showing login/sighup flow. IUt refreshes fine when a user logs out though. It will be fixed asap.

### Deployed

The application is deployed on Heroku: [Check deployed app](https://gentle-garden-63936.herokuapp.com/)

