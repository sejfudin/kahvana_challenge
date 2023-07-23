import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import connectDB from "./mongo/db";
import routes from "./routes/userRoutes";

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use("/users", routes);

const PORT = 5000;
app.listen(PORT, () => {
    connectDB();
  console.log(`Server is running on port ${PORT}`);
});