import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);
      alert("Signup successful");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-xl w-full">
        <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" name="fname" placeholder="First Name" onChange={handleChange} className="p-2 border rounded-xl" />
            <input type="text" name="lname" placeholder="Last Name" onChange={handleChange} className="p-2 border rounded-xl" />
          </div>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded-xl" />
          <div className="grid md:grid-cols-2 gap-4">
            <input type="password" name="password" placeholder="Password" onChange={handleChange} className="p-2 border rounded-xl" />
            <input type="password" name="cpassword" placeholder="Confirm Password" onChange={handleChange} className="p-2 border rounded-xl" />
          </div>
          <button type="submit" className="w-full py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700">Sign Up</button>
          <p className="text-center text-sm mt-4">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
        </form>
      </div>
    </section>
  );
}

export default Signup;
