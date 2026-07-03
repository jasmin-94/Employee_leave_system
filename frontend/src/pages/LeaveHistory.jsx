import { useEffect, useState } from "react";
import api from "../services/api";

function LeaveHistory() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/leaves", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setLeaves(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <h1>My Leaves</h1>

      {leaves.map((leave) => (
        <div key={leave._id}>
          <h3>{leave.leaveType}</h3>

          <p>
            {leave.startDate.substring(0, 10)}
            {" - "}
            {leave.endDate.substring(0, 10)}
          </p>

          <p>Status: {leave.status}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default LeaveHistory;