import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import connectDB from "./mongo/db";
import routes from "./routes/userRoutes";
import errorHandler from "./middlewares/errorHandler";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use("/users", routes);

app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
