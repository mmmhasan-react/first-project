import express from "express";
import { studentController } from "./student.controller";

const router = express.Router();

router.post("/create-student", studentController.createStudent);
router.get("/getAllStudents", studentController.getAllStudent);
router.get("/getSingleStudent/:studentId", studentController.getSingleStudent);

export const studentRoutes = router;
