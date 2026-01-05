import { useEffect, useState } from "react";
import api from "../api/axiosConfig";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    api.get("/students").then(res => setStudents(res.data));
  }, []);

  return (
    <div className="card p-3 mb-3">
      <h4>Students</h4>
      <ul className="list-group">
        {students.map(s => (
          <li key={s.id} className="list-group-item">
            {s.name} - {s.department} - Year {s.year}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
