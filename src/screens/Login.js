import React from 'react'
import { useState } from 'react'
import { Link, json, useNavigate } from "react-router-dom"

export default function Login
() {
  const Navigate = useNavigate();
  const [credentials, setcredentials] = useState({  email: "", password: "" })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/loginuser', {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // Corrected the header key
      },
      body: JSON.stringify({  email: credentials.email, password: credentials.password}) 
    });
    // Handle the response here, for example:
    if (response.ok) {
      // Request was successful, handle the response
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      Navigate("/");
      const data = await response.json();
      console.log("Data from server:", data);
    } else {
      // Request failed, handle the error
      alert("Enter valid Credentials");
      console.error('Error:', response.status);
    }
  };
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} />
        </div>
        <button type="submit" class="btn btn-success">Submit</button>
        <Link to ="/createuser" class="btn btn-danger">Register</Link>
      </form>
    </div>
  );
}
