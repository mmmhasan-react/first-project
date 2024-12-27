import express from "express";
import cors from "cors";
import { studentRoutes } from "./app/modules/student.route";
const app = express();

//parser
app.use(express.json());
app.use(cors());

app.use("/api/v1/students", studentRoutes);

export default app;
