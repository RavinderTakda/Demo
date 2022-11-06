const express = require("express");
require("dotenv").config()

const app = express();

const PORT =process.env.PORT || 8500


app.get("/", (req, res) => {
  res.send("Hello Home");
});


//SERVER RUNNING






app.listen( 8000, () => {

    console.log("Connection to DB success");
    
});