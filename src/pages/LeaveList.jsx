import { useEffect, useState } from "react";
import api from "../api/axiosConfig";

function LeaveList() {
  const [leaves, setLeaves] = useState([]);

useEffect(() => {
  api.get("/api/leaves")
    .then((res) => {
      setLeaves(res.data);
    })
    .catch((err) => {
      console.error("Error fetching leaves:", err);
    });
}, []);


  return (
    <div className="container mt-4">
      <h2>Leave List</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leaves.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">
                No leave records found
              </td>
            </tr>
          ) : (
            leaves.map((leave) => (
              <tr key={leave.id}>
                <td>{leave.id}</td>
                <td>{leave.name}</td>
                <td>{leave.reason}</td>
                <td>{leave.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default LeaveList;
