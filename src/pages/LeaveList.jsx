import { useEffect, useState } from "react";
import api from "../api/axiosConfig";

function LeaveList() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    api.get("/api/leaves")
      .then((response) => {
        setLeaves(response.data);
      })
      .catch((error) => {
        console.error("Error fetching leaves:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Leave List</h2>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {leaves.map((leave) => (
            <tr key={leave.id}>
              <td>{leave.id}</td>
              <td>{leave.studentName}</td>
              <td>{leave.reason}</td>
              <td>{leave.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaveList;
