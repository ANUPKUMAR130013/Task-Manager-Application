import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {

      const res = await API.post("/auth/login", form);

      login(res.data.user, res.data.token);

      navigate("/dashboard");

    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="card" style={{ width: "400px", margin: "50px auto" }}>

      <h2>Login</h2>

      <form onSubmit={submit}>

        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          required
        />

        <button type="submit">
          Login
        </button>

      </form>

      <p>
        Don't have an account?
      </p>

      <Link to="/register">
        Register
      </Link>

    </div>
  );
};

export default Login;