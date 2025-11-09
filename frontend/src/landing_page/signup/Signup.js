import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const API_URL = process.env.REACT_APP_API_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!email || !username || !password) {
      alert("All fields are required!");
      return;
    }

    try {
      
      const res = await axios.post(`${API_URL}/signup`, {
        email,
        username,
        password,
      });

      console.log("Signup response:", res.data);

      
      localStorage.setItem("auth", JSON.stringify(res.data));
      //  Trigger Navbar update instantly
    window.dispatchEvent(new Event("authChange")); 


      alert("Signup successful!");
      navigate("/"); 
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);

      
      if (error.response?.status === 409) {
        alert("User already exists! Please login instead.");
        navigate("/login");
      } else {
        alert("Signup failed! Please try again.");
      }
    }
  };

  return (
    <div className="container form-container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
            <h3 className="text-center mb-3">Signup</h3>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
              <div id="emailHelp" className="form-text text-center">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary w-50">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
