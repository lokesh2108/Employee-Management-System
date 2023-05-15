import mongoose from "mongoose";

const EmployeesSchema = new mongoose.Schema({
    name: {
        type:String, 
        required:[true, 'name required']
    },
    extension: {
        type:Number, 
        required:[true, 'ext required']
    },
    email: {
        type:String, 
        required:[true, 'email required']
    },
    title: {
        type:String, 
        required:[true, 'title required']
    },
    dateHired: { 
        type: Date, 
        default:Date.now
    },
    currentlyEmployed: { 
        type: Boolean, 
        default:true
    }
})
export default mongoose.model('Employee', EmployeesSchema) 