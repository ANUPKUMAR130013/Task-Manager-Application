import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

const Register = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
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

      await API.post("/auth/register", form);

      alert("Registration Successful");

      navigate("/");

    } catch (err) {

      alert(err.response?.data?.message || "Registration Failed");

    }
  };

  return (
    <div className="card" style={{ width: "400px", margin: "50px auto" }}>

      <h2>Register</h2>

      <form onSubmit={submit}>

        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          required
        />

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
          Register
        </button>

      </form>

      <p>
        Already have an account?
      </p>

      <Link to="/">
        Login
      </Link>

    </div>
  );
};

export default Register;