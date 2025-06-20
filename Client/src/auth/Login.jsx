import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      alert("Login successful");
    } catch (err) {
      alert("Login failed");
      console.error(err)
    }
  };

  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex justify-between text-sm text-blue-600 hover:underline">
            <a href="#">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-6 text-sm">
          <p className="text-gray-600">Or sign up using</p>
          <Link to="/signup" className="text-blue-600 hover:underline font-medium">Sign Up</Link>
        </div>

        <div className="flex justify-center mt-4 space-x-4">
          <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/facebook.png" alt="facebook" className="h-8 w-8" /></a>
          <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/twitter--v1.png" alt="twitter" className="h-8 w-8" /></a>
          <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google" className="h-8 w-8" /></a>
        </div>
      </div>
    </section>
  );
}

export default Login;
