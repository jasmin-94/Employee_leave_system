import { Link } from "react-router-dom";

function EmployeeDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container">
      <h1>Welcome, {user?.name}</h1>

      <br />

      <Link to="/apply-leave">
        <button>Apply Leave</button>
      </Link>

      <br />
      <br />

      <Link to="/history">
        <button>View Leave History</button>
      </Link>

      <br />
      <br />

      <button
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default EmployeeDashboard;