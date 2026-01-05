import { useState } from "react";
import api from "../api/axiosConfig";

function ApplyLeave() {
  const [leave, setLeave] = useState({
    studentId: "",
    fromDate: "",
    toDate: "",
    reason: ""
  });

  const handleChange = (e) => {
    setLeave({ ...leave, [e.target.name]: e.target.value });
  };

  const applyLeave = async () => {
    await api.post("/leaves", leave);
    alert("Leave Applied");
    setLeave({ studentId: "", fromDate: "", toDate: "", reason: "" });
  };

  return (
    <div className="card p-3 mb-3">
      <h4>Apply Leave</h4>
      <input className="form-control mb-2" name="studentId" placeholder="Student ID" value={leave.studentId} onChange={handleChange} />
      <input type="date" className="form-control mb-2" name="fromDate" value={leave.fromDate} onChange={handleChange} />
      <input type="date" className="form-control mb-2" name="toDate" value={leave.toDate} onChange={handleChange} />
      <input className="form-control mb-2" name="reason" placeholder="Reason" value={leave.reason} onChange={handleChange} />
      <button className="btn btn-warning" onClick={applyLeave}>Apply</button>
    </div>
  );
}

export default ApplyLeave;
