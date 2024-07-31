const express = require("express");
const app = express();
const mongoose = require('mongoose');
const userRouter = require("./Routes/user.routes.js");
const rootadminRouter = require("./Routes/rootadmin.routes.js");
const cors = require('cors');

// Middleware to parse JSON bodies
app.use(express.json());
// CORS setup
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

// Route handlers
app.use("/rootadmin", rootadminRouter);
app.use("/user", userRouter);
const PocMernDB = "mongodb+srv://kevinmathew365:VzuczMR9LlxG4mT0@cluster0.nz5wrjr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Database connection
mongoose.connect(PocMernDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("DB connected");
    app.listen(5002, () => {
      console.log('Server started on port 5002');
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Basic endpoint to check if server is running
app.get('/', (req, res) => {
  console.log("Node is running");
  res.send("5002 port");
});