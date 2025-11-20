import React, { useEffect, useState } from "react";
import { getEmployees } from "../api/Api";

function Home() {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEmployees();
      setEmployees(data);
      // Assuming each employee has a department field
      const dept = [...new Set(data.map(emp => emp.department || "General"))];
      setDepartments(dept);
    };
    fetchData();
  }, []);

  return (
    <div className="main-content">
      <h2>Dashboard Overview</h2>

      {/* Dashboard Cards */}
      <div className="dashboard-cards mt-4">
        <div className="dashboard-card">
          <h3>{employees.length}</h3>
          <p>Total Employees</p>
        </div>
        <div className="dashboard-card">
          <h3>{departments.length}</h3>
          <p>Departments</p>
        </div>
        <div className="dashboard-card">
          <h3>15</h3>
          <p>Projects</p>
        </div>
        <div className="dashboard-card">
          <h3>5</h3>
          <p>Open Tickets</p>
        </div>
      </div>

      {/* Dummy content */}
      <div className="dashboard-cards mt-5 gap-4" style={{ display: "flex", flexWrap: "wrap" }}>
        {/* Recent Activity */}
        <div className="activity-card" style={{ flex: "2", minWidth: "300px" }}>
          <h5>Recent Activities</h5>
          <ul>
            <li>John added a new employee</li>
            <li>Jane updated salary</li>
            <li>Marketing department created</li>
            <li>Ticket #23 resolved</li>
            <li>Server backup completed</li>
          </ul>
        </div>

        {/* Notifications */}
        <div className="notification-card" style={{ flex: "1", minWidth: "250px" }}>
          <h5>Notifications</h5>
          <ul>
            <li>Meeting at 3 PM</li>
            <li>System maintenance tomorrow</li>
            <li>New message from CEO</li>
            <li>Policy updates available</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Home;
