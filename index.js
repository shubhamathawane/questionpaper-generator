const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

const QuestionRouter = require('./Routes/QuestionGenerator')

app.use(cors());
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 3001;

app.use("/api", QuestionRouter)


app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
