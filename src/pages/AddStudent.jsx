import { useState } from "react";
import api from "../api/axiosConfig";

function AddStudent() {
  const [student, setStudent] = useState({
    name: "",
    department: "",
    year: ""
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const saveStudent = async () => {
    await api.post("/students", student);
    alert("Student Added");
    setStudent({ name: "", department: "", year: "" });
  };

  return (
    <div className="card p-3 mb-3">
      <h4>Add Student</h4>
      <input className="form-control mb-2" name="name" placeholder="Name" value={student.name} onChange={handleChange} />
      <input className="form-control mb-2" name="department" placeholder="Department" value={student.department} onChange={handleChange} />
      <input className="form-control mb-2" name="year" placeholder="Year" value={student.year} onChange={handleChange} />
      <button className="btn btn-primary" onClick={saveStudent}>Save</button>
    </div>
  );
}

export default AddStudent;
