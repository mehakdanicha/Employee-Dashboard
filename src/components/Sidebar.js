import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUsers, FaPlus, FaChartPie } from "react-icons/fa";

export const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="sidebar d-flex flex-column p-3">
      <h4>Dev Dashboard</h4>
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        <span className="icon"><FaHome /></span> Home
      </Link>
      <Link to="/employees" className={location.pathname === "/employees" ? "active" : ""}>
        <span className="icon"><FaUsers /></span> Employees
      </Link>
      <Link to="/add" className={location.pathname === "/add" ? "active" : ""}>
        <span className="icon"><FaPlus /></span> Add Employee
      </Link>
      <Link to="/analytics" className={location.pathname === "/analytics" ? "active" : ""}>
        <span className="icon"><FaChartPie /></span> Analytics
      </Link>
    </div>
  );
};
