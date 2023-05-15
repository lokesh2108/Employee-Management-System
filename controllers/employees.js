import Employee from "../models/Employee.js";

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});

    res.status(200).json({ employees, count: employees.length });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const getEmployee = (req, res) => {
  res.send("Get a employee");
};
const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);

    res.status(201).json({ employee });
  } catch (error) {
    res.status(500).json({ msg: err });
  }
};
const updateEmployee = (req, res) => {
  res.send("Update an employee");
};
const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ msg: "Employee not found" });
    }
    res.status(200).json({ msg: "Employee successfully deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};
export {
  getAllEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
