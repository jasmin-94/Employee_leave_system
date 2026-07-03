import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import ApplyLeave from "./pages/ApplyLeave";
import LeaveHistory from "./pages/LeaveHistory";
import ManagerDashboard from "./pages/ManagerDashboard";
import PendingLeaves from "./pages/PendingLeaves";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<EmployeeDashboard />} />
        <Route path="/apply-leave" element={<ApplyLeave />} />
        <Route path="/history" element={<LeaveHistory />} />
        <Route path="/manager"element={<ManagerDashboard />}/>
        <Route path="/pending-leaves"element={<PendingLeaves />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;