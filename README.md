# Kahvana challenge

This repository contains technical task for KAHVANA company.

## Technologies Used

The application is built using the following technologies:
- Node.js/Express.js<br>
  Backend is buit using Node.js/Express.js
- React.js<br>
  Frontend is built using React.js
- MongoDB<br>
  Used for store persistent data
- Mongoose<br>
  Used for data base manipulation

## How to Run the Application

Follow the steps below to set up and run the application:

### Prerequisites

- Node.js installed on your machine
- Git installed on your machine

### Cloning repository

1. Clone the repository: git clone https://github.com/sejfudin/kahvana_challenge.git

### Database seed

1. Navigate to the `api` folder and run: `npm run seed`

### Running the Application

1. Navigate to the `api` folder and install dependencies: `npm install`
2. Navigate to the `ui` folder and install dependencies: `npm install`
3. Create `.env` file in api folder. You can refer to the `env.example` file for the required variables.
4. Start the API server:
   -Navigate to api folder and run `npm start`
5. Start the frontend:
   -Navigate to ui folder and run `npm start`
6. Visit in the browser `http://localhost:3000/`

### Features implemented

- Add user
- Edit user
- Delete user
- Search user by name, email and phone number

### Deployment
The applicatin is deployed on render.com. To show the application just visit this [LINK](https://kahvana-app.onrender.com/)
