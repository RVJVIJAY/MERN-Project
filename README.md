# MERN Stack CRUD Application

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
This project is a simple CRUD (Create, Read, Update, Delete) application built with the MERN stack. It allows users to add, delete, update, and view their data. The application consists of a React frontend that communicates with a Node.js and Express backend, which interacts with a MongoDB database for storing and retrieving data.

## Technologies Used
- **Frontend**: 
  - React
  - CSS
  - JSX
  - HTML
- **Backend**: 
  - Node.js
  - Express.js
- **Database**: 
  - MongoDB

## Features
- User can **add** new records.
- User can **view** existing records.
- User can **update** records.
- User can **delete** records.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
2.Navigate to the project directory:

    cd your-repo-name
3.Install the dependencies for the backend:

    cd backend
    npm install
4. Install the dependencies for the frontend:
   
        cd ../frontend
        npm install
5.Set up your MongoDB database and update the connection string in the backend code.

Usage
To start the application, follow these steps:

1.Start the backend server:

     cd backend
     npm start
The backend server will run on http://localhost:8000 (or your specified port).

2.Start the frontend application:
 
    cd ../frontend
    npm start
The frontend application will run on http://localhost:3000.


API Endpoints
User Routes
GET /users: Retrieve all users
GET /users/
: Retrieve a user by ID
POST /users: Add a new user
PUT /users/
: Update a user by ID
DELETE /users/
: Delete a user by ID
  
        

 


 



    



