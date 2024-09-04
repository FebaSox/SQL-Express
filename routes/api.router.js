const express = require("express");

const router = express.Router();

router.get("/api",(req, res)=> {

    res.json("API is working");
})

export default router;