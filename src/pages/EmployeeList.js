import React, { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../api/Api";
import { Link } from "react-router-dom";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  const loadEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;
    await deleteEmployee(id);
    loadEmployees();
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <div className="main-content">
      <h2>Employees</h2>

      <div className="employee-table mt-4">
        <table className="table mb-0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Salary</th>
              <th>Age</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map(emp => (
                <tr key={emp.id}>
                  <td>{emp.name}</td>
                  <td>${emp.salary}</td>
                  <td>{emp.age}</td>
                  <td>{emp.department || "General"}</td>
                  <td>
                    <Link
                      to={`/edit/${emp.id}`}
                      className="btn btn-sm btn-primary me-2"
                    >
                      ✏️ Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(emp.id)}
                      className="btn btn-sm btn-danger"
                    >
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-3">
                  No employees found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;
