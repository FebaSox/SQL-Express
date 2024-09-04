//Imports 
const express = require("express");
const { PORT } = require("./config");
import userRouter from "./routes/users.router";
import APIRouter from "./routes/api.router";
import morgan from "express";

//Create the express server
const server = express();



server.use(morgan("dev"));

//Error Handling Middleware
server.use((err, req, res, next) => {
    if (err){
        res.status(500);
        res.json(err);
    } else {
        res.status(500);
        res.json(new error("Something went wrong :/"));
    };
});

//Routes
server.use("/users", userRouter);
server.use("/", APIRouter);

//Tell the server to listen for incoming request
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});