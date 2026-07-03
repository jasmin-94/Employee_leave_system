import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
{
     name:{
      type:String,
      required:true,
    },
    empID:{
        type:String,
        required: true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    department:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum: ["employee","manager"]
    },
    joiningDate:{
        type:Date,
        required:true,
    },
},
{
    timestamps:true,
}
);

const Employee = mongoose.model("Employee",employeeSchema);

export default Employee;