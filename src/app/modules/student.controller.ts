import { Request, Response } from "express";

import { studentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    //will call service function
    const { student: studentData } = req.body;
    console.log(studentData);

    const result = await studentServices.createStudentIntoDb(studentData);
    //send response

    res.status(200).json({
      success: true,
      message: "create student successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDb();
    //send response

    res.status(200).json({
      success: true,
      message: "get all students successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSingleStudentFromDb(studentId);
    //send response

    res.status(200).json({
      success: true,
      message: "get a student successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
