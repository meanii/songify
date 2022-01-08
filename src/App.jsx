import Login from "./components/auth/Login";
import Signup from "./components/auth/Singup";
import Dashboard from "./components/dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
