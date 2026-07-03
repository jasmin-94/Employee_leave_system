import { useState } from "react";
import api from "../services/api";

function ApplyLeave() {
  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/leaves",
        {
          leaveType,
          startDate,
          endDate,
          reason,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Leave Applied Successfully!");

      setLeaveType("");
      setStartDate("");
      setEndDate("");
      setReason("");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to apply leave"
      );
    }
  };

  return (
    <div>
      <h1>Apply Leave</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Leave Type"
          value={leaveType}
          onChange={(e) =>
            setLeaveType(e.target.value)
          }
        />

        <br />
        <br />

        <input
          type="date"
          value={startDate}
          onChange={(e) =>
            setStartDate(e.target.value)
          }
        />

        <br />
        <br />

        <input
          type="date"
          value={endDate}
          onChange={(e) =>
            setEndDate(e.target.value)
          }
        />

        <br />
        <br />

        <textarea
          placeholder="Reason"
          value={reason}
          onChange={(e) =>
            setReason(e.target.value)
          }
        />

        <br />
        <br />

        <button type="submit">
          Apply
        </button>
      </form>
    </div>
  );
}

export default ApplyLeave;