import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(bodyParser.json());

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});