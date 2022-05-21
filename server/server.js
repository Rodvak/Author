// import all dependencies 
const express = require("express");
const cors = require("cors")
const app = express();
const port = 8000;

// config mongoose
require("./configs/mongoose.config")
app.use(cors())

// config express
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// routes and logic
require("./routes/author.routes")(app)

// listen to the port 
app.listen( port, () => console.log(`Listening on port: ${port}`));