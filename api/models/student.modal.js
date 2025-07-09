import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    matric_no: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    /*  itemId: {
      type: String,
      required: true,
    }, */
    reference: {
      type: String,
      required: true,
      unique: true,
    },
    item: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("student", studentSchema);

export default Student;
