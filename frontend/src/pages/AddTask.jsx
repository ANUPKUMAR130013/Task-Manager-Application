import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";

const AddTask = () => {
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "Pending",
    dueDate: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/tasks", task);

      alert("Task Added Successfully");

      navigate("/dashboard");

    } catch (err) {
      alert("Error Adding Task");
    }
  };

  return (
    <>
      <Navbar />

      <div className="card" style={{ width: "600px", margin: "30px auto" }}>
        <h2>Add Task</h2>

        <form onSubmit={submit}>

          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
          />

          <select
            name="priority"
            onChange={handleChange}
          >
            <option>Low</option>
            <option selected>Medium</option>
            <option>High</option>
          </select>

          <select
            name="status"
            onChange={handleChange}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <input
            type="date"
            name="dueDate"
            onChange={handleChange}
          />

          <button type="submit">
            Save Task
          </button>

        </form>
      </div>
    </>
  );
};

export default AddTask;