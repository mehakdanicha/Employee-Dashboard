import React, { useState } from "react";
import { addEmployee } from "../api/Api";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
    const [form, setForm] = useState({ name: "", salary: "", age: "", department: "" });
    const navigate = useNavigate();

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = async () => {
        await addEmployee(form);
        navigate("/employees");
    };

    return (
        <div className="main-content">
            <div className="form-card">
                <h3>Add New Employee</h3>
                <input
                    className="form-control"
                    name="name"
                    placeholder="Employee Name"
                    onChange={handleChange}
                />
                <input
                    className="form-control"
                    name="salary"
                    placeholder="Salary"
                    onChange={handleChange}
                />
                <input
                    className="form-control"
                    name="age"
                    placeholder="Age"
                    onChange={handleChange}
                />
                <input
                    className="form-control"
                    name="department"
                    placeholder="Department"
                    onChange={handleChange}
                />
                <button className="btn btn-primary mt-2" onClick={handleSubmit}>Add Employee</button>
            </div>
        </div>

    );
}

export default AddEmployee;
