import React, { useState } from "react";
import axios from "axios";
function Contact() {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    number:"",
    address:""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Massage sent!");
      setFormData({
        name: "",
        email: "",
        number: "",
        addres: "",
      });
    } catch (error) {
      alert("error sending Massege");
      console.error(error);
    }
  };
  return (
    <>
      <section>
        <h1 class="text-center font-bold text-3xl my-10 text-purple-800 underline decoration-solid text-purple">
          Get In Touch
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-5">
          <div class="mt-5 shadow-2xl rounded-2xl p-6 h-96 bg-gray-50">
            <h1 class="text-center font-bold text-2xl mt-5 ">
              Contact Information
            </h1>
            <div class="info text-xl mt-4">
              <h2 class="font-bold">Email:</h2> brijeshvelariya@gmail.com
              <h2 class="font-bold">Contact number:</h2> 1234567890
              <h2 class="font-bold">Address:</h2> Om Apartment, 132 feet ring
              road, Shashtrinagar-Ahmedabad
            </div>
          </div>
          <div class="mt-5 shadow-2xl rounded-2xl p-6 font-bold text-2xl bg-gray-50">
            <form onSubmit={handleSubmit}>
              Name:{" "}
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                class="ring-1 rounded-xl w-full p-2"
                onChange={handleChange}
                value={formData.name}
              />
              <br />
              <br />
              Number:{" "}
              <input
                type="tel"
                name="number"
                placeholder="Enter your number"
                class="ring-1 rounded-xl w-full p-2"
                onChange={handleChange}
                value={formData.number}
              />
              <br />
              <br />
              address:{" "}
              <input
                type="text"
                name="address"
                placeholder="Enter your Address"
                class="ring-1 rounded-xl w-full p-2"
                onChange={handleChange}
                value={formData.address}
              />
              <br />
              <br />
              Email:{" "}
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                class="ring-1 rounded-xl w-full p-2"
                onChange={handleChange}
                value={formData.email}
              />
              <br />
              <br />
              <button class="bg-cyan-500 text-indigo-800 mt-5 p-2 rounded-2xl hover:bg-cyan-600 hover:scale-105 transition-transform duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
