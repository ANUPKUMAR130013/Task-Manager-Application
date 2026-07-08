import { Link } from "react-router-dom";
import API from "../services/api";

const TaskCard = ({ task, fetchTasks }) => {

  const deleteTask = async () => {
    try {
      await API.delete(`/tasks/${task._id}`);
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        <strong>Status:</strong> {task.status}
      </p>

      <p>
        <strong>Priority:</strong> {task.priority}
      </p>

      <p>
        <strong>Due Date:</strong>{" "}
        {new Date(task.dueDate).toLocaleDateString()}
      </p>

      <Link to={`/edit-task/${task._id}`}>
        <button>Edit</button>
      </Link>

      <button
        onClick={deleteTask}
        style={{ marginLeft: "10px", background: "red" }}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskCard;