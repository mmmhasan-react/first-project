import { model, Schema } from "mongoose";
import { Gurdian, LocalGurdian, Student, UserName } from "./student";
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, "firstName is required"],
  },
  middleName: {
    type: String,
    required: [true, "middleName is required"],
  },
  lastName: {
    type: String,
    required: [true, "lastName is required"],
  },
});
//----------------
const gurdianSchema = new Schema<Gurdian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNumber: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },

  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNumber: {
    type: String,
    required: true,
  },
});
//---------------
const localGurdianSchema = new Schema<LocalGurdian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});
//-----------------
const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: true,
  },
  name: userNameSchema,
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  emergencyContactNumber: {
    type: String,
    required: true,
  },
  BloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", " AB+", "AB-", "O+", "O-"],
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  gurdian: {
    type: String,
    required: true,
  },
  localGurdian: {
    type: localGurdianSchema,
    required: true,
  },
  profileImage: {
    type: String,
    required: true,
  },
  isActive: {
    type: String,
    enum: ["active", "inActive"],
    default: "active",
  },
});

export const studentModel = model<Student>("student", studentSchema);
