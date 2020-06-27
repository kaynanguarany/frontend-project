## FRONTEND PROJECT

Frontend project using React + Redux

### SETUP

#### Build
To build the project, run the command:
```
docker-compose build
```
this will build the necessary container

#### Serve the App
To bring the React app up, run the command:
```
docker-compose up
```
You should be able to access the app through the URL `http://localhost:3000`.

Note: To run the app in the development enviroment, `docker-compose` use `Dockerfile.dev` file.

### Deploy

The app is hosted on AWS Beanstalk, working inside a `DOCKER` enviroment. In order to execute the deploy, AWS Beanstalk uses the `Dockerfile` file.

App link: ...
