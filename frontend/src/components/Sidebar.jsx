import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">

      <h3>Menu</h3>

      <ul>

        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/add-task">
            Add Task
          </Link>
        </li>

        <li>
          <Link to="/profile">
            Profile
          </Link>
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;