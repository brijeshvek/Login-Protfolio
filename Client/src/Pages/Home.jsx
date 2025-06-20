import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/myportfolio")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);
  return (
    <>
      <section className="w-auto flex flex-col items-center justify-center text-center py-50 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-white">
        <h1 className="text-7xl animate-bounce">Hello, I'm Brijesh...!</h1>
        <p className="text-2xl mt-5 animate-fade-in-up">
          design a cool and simple dynamic website.
        </p>
        <button className="bg-gray-50 text-purple-800 mt-5 p-2 rounded-2xl hover:bg-gradient-to-r from-purple-600 via pink-500 to blue-500">
          <Link to="/project">View My Portfolio</Link>
        </button>
      </section>
      <section className="mx-auto px-4 py-16 bg-gradient-to-r from-indigo-500">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-18">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.slice(0,3).map((project, index) => (
            <div
              key={index}
              className="container p-6 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 bg-gray-50"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-16 w-16 block mt-8 mx-auto rounded-xl duration-300"
              />
              <h3 className="text-center font-bold my-3 text-lg">
                {project.title}
              </h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
