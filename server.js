const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require("./routes");



const PORT = process.env.PORT || 3001;
const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/pickup", { useNewUrlParser: true }); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
    debugger;
    app.use(express.static("client/build"));
  } 

  app.use(routes);

  app.listen(PORT, function() {
    console.log(`API server listening on PORT ${PORT}!`);
  }); 