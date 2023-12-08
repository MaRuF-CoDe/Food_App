import React, { useState } from 'react'
import { Link } from "react-router-dom"

export default function Signup() {
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", location: "" })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/createuser', {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // Corrected the header key
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.location }) // You need to provide the data to be sent in the request body
    });
    // Handle the response here, for example:
    if (response.ok) {
      // Request was successful, handle the response
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
          <label for="exampleInputName1" class="form-label">Name</label>
          <input type="Name" class="form-control" name='name' value={credentials.name} onChange={onChange} />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Address</label>
          <input type="text" class="form-control" id="exampleInputPassword1" name='location' value={credentials.location} onChange={onChange} />
        </div>
        <button type="submit" class="btn btn-success">Submit</button>
        <Link to ="/login" class="btn btn-danger">Already User</Link>
      </form>
    </div>
  );
}
