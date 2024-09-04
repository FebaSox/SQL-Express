//import express
const express = require("express");
//Import the various controller functions
import { getAllUsers, getSingleUser } from "../controllers/users.controller";

//Use express to create a router object
const userRouter = express.Router();

// The R in CRUD - Read data from the database
userRouter.get("/:id?", async (req, res, next) => {
  try {
    console.log('user router get ran')
    const { id } = req.params;
    console.log('id was ', id)
    let data;
    //Check if the id exist
    if (id) {
      //Get the data for a single user
      data = await getSingleUser(id);
    } else {
        data = await getAllUsers();
        console.log('data', data);
    }
    //Respond with the data that we recieved from the controller
    res.json(data);
  } catch (err) {
    next(err);
  }
});

//Export the router
export default userRouter;
