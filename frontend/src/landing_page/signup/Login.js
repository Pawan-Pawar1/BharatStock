import { useState } from "react";
import React  from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login(){
    const navigate = useNavigate();
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const API_URL = process.env.REACT_APP_API_URL;
    const handleSubmit=(e)=>{
             e.preventDefault();

        if(!email || !password){
            alert("all fields are required for login");
            return
        }
          axios
               .post(`${API_URL}/login`, { email, password })
                .then((res) => {
                     
               localStorage.setItem("auth", JSON.stringify(res.data));
                     //  Trigger Navbar update instantly
                         window.dispatchEvent(new Event("authChange"));
                 alert("Login successful!");
                 
                  navigate("/"); 
    })
         
    }

    return(
        <div className="container form-container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
            <h3 className="text-center mb-3">sign in</h3>


            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary w-50">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
}