import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TaskCard from "../components/TaskCard";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks", {
        params: { status }
      });
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [status]);

  return (
    <>
      <Navbar />

      <div className="container">
        <Sidebar />

        <div className="content">
          <h2>Dashboard</h2>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">All Tasks</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          {tasks.length === 0 ? (
            <p>No Tasks Found</p>
          ) : (
            tasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                fetchTasks={fetchTasks}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;