import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    matricNo: {
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
    itemId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Stundent = mongoose.model("stundent", studentSchema);

export default Stundent;
