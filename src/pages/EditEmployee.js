import React, { useEffect, useState } from "react";
import { getEmployees, updateEmployee } from "../api/Api";
import { useParams, useNavigate } from "react-router-dom";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", salary: "", age: "", department: "" });

  useEffect(() => {
    const loadEmployee = async () => {
      const data = await getEmployees();
      const emp = data.find(e => e.id === id);
      if (emp) setForm(emp);
    };
    loadEmployee();
  }, [id]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    await updateEmployee(id, form);
    navigate("/employees");
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <input className="form-control mb-2" name="name" value={form.name} onChange={handleChange} />
      <input className="form-control mb-2" name="salary" value={form.salary} onChange={handleChange} />
      <input className="form-control mb-2" name="age" value={form.age} onChange={handleChange} />
      <input className="form-control mb-2" name="department" value={form.department} onChange={handleChange} />
      <button className="btn btn-primary" onClick={handleSubmit}>Update Employee</button>
    </div>
  );
}

export default EditEmployee;
