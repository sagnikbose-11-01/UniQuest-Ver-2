// pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Input from "../components/Input";
import Button from "../components/Button";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        const response = await fetch(
          "https://uni-backend-wqfy.onrender.com/api/auth/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: formData.email.trim(),
              password: formData.password.trim(),
            }),
          }
        );
        const data = await response.json();

        if (response.ok) {
          localStorage.setItem("user", JSON.stringify(data));

          switch (data.role) {
            case "admin":
              navigate("/dashboard/admin");
              break;
            case "university":
              navigate("/dashboard/university");
              break;
            default:
              navigate("/dashboard/applicant");
          }
        } else {
          alert(data.error);
        }
      } catch (err) {
        alert("Server error. Try again later.");
        console.error(err);
      }
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        {/* Email */}
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter valid email"
        />
        {errors.email && <span className="error">{errors.email}</span>}

        {/* Password */}
        <div className="input-group password-group">
          <label className="input-label">Password</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        {errors.password && <span className="error">{errors.password}</span>}

        <Button type="submit">Login</Button>

        <p className="login-footer">
          Don’t have an account? <a href="/register">Register here</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
