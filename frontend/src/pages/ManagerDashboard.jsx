import { Link } from "react-router-dom";

function ManagerDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="container">
      <h1>Welcome, {user?.name}</h1>
      <h2>Manager Dashboard</h2>

      <br />

      <Link to="/pending-leaves">
        <button>View Pending Requests</button>
      </Link>

      <br />
      <br />

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default ManagerDashboard;