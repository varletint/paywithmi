import Student from "../models/student.modal.js";
import { errorHandler } from "../utils/errorHandler.js";

export const createStudent = async (req, res, next) => {
  try {
    const { reference, matric_no, fullname, itemId } = req.body;

    const newStudent = new Student({
      reference,
      matric_no,
      fullname,
      item,
    });
    await newStudent.save();
    res.status(200).json(newStudent);
  } catch (error) {
    next(error);
  }
};
