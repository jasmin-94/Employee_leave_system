import { useEffect, useState } from "react";
import api from "../services/api";

function PendingLeaves() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get(
        "/leaves/pending",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLeaves(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const approveLeave = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await api.put(
        `/leaves/${id}/approve`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Leave Approved");
      fetchLeaves();
    } catch (error) {
      console.log(error);
    }
  };

  const rejectLeave = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await api.put(
        `/leaves/${id}/reject`,
        {
          managerComments: "Rejected",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Leave Rejected");
      fetchLeaves();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Pending Leave Requests</h1>

      {leaves.length === 0 ? (
        <p>No pending requests.</p>
      ) : (
        leaves.map((leave) => (
          <div
            className="card"
            key={leave._id}
          >
            <h3>
              {leave.employeeId.name}
            </h3>

            <p>
              Employee ID:
              {" "}
              {leave.employeeId.empID}
            </p>

            <p>
              Leave Type:
              {" "}
              {leave.leaveType}
            </p>

            <p>
              Reason:
              {" "}
              {leave.reason}
            </p>

            <p>
              Dates:
              {" "}
              {leave.startDate.substring(0, 10)}
              {" - "}
              {leave.endDate.substring(0, 10)}
            </p>

            <button
              onClick={() =>
                approveLeave(leave._id)
              }
            >
              Approve
            </button>

            <button
              onClick={() =>
                rejectLeave(leave._id)
              }
            >
              Reject
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default PendingLeaves;