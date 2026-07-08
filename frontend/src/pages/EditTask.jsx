import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
    dueDate: "",
  });

  useEffect(() => {
    loadTask();
  }, []);

  const loadTask = async () => {
    const res = await API.get(`/tasks/${id}`);
    setTask(res.data);
  };

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    await API.put(`/tasks/${id}`, task);

    alert("Task Updated");

    navigate("/dashboard");
  };

  return (
    <>
      <Navbar />

      <div className="card" style={{ width: "600px", margin: "30px auto" }}>
        <h2>Edit Task</h2>

        <form onSubmit={submit}>

          <input
            name="title"
            value={task.title}
            onChange={handleChange}
          />

          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
          />

          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <select
            name="status"
            value={task.status}
            onChange={handleChange}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <input
            type="date"
            name="dueDate"
            value={task.dueDate?.substring(0,10)}
            onChange={handleChange}
          />

          <button type="submit">
            Update Task
          </button>

        </form>
      </div>
    </>
  );
};

export default EditTask;