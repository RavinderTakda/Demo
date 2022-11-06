const express = require("express");


const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello Home");
});


//SERVER RUNNING
app.listen( 8000, () => {
  try {

    console.log("Connection to DB success");
  } catch (error) {

  }

});