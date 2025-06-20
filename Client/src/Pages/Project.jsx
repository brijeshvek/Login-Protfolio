import React, { useEffect, useState } from "react";
import axios from "axios";

function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/myportfolio")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <>
      <section className="mx-auto px-4 py-16 bg-gradient-to-r from-indigo-500">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-18">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="container p-6 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 bg-gray-50"
            >
              <img
                src={project.image }
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

      <section>
        <h2 className="text-4xl font-bold underline decoration-solid text-center text-purple-800 mb-10 mt-8">
          What Client Says
        </h2>
        <p className="text-xl sm:mx-12 my-18 md:mx-25 lg:mx-40 shadow-2xl p-3 rounded-xl hover:scale-105 transition-transform duration-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quas
          doloribus eligendi quisquam tempora perferendis maiores...
        </p>
      </section>
    </>
  );
}

export default Project;
