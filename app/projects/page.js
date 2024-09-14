import React from "react";

export default function page() {
  const projects = [
    {
      title: "Project One",
      description:
        "A brief description of the first project. Highlighting its key features and technologies used.",
      image: "./project.png", // Replace with your image URL
      link: "/", // Replace with project URL
    },
    {
      title: "Project Two",
      description:
        "A brief description of the second project. Highlighting its key features and technologies used.",
      image: "./project.png", // Replace with your image URL
      link: "/", // Replace with project URL
    },
    {
      title: "Project Three",
      description:
        "A brief description of the third project. Highlighting its key features and technologies used.",
      image: "./project.png", // Replace with your image URL
      link: "/", // Replace with project URL
    },
    {
      title: "Project Four",
      description:
        "A brief description of the fourth project. Highlighting its key features and technologies used.",
      image: "./project.png", // Replace with your image URL
      link: "/", // Replace with project URL
    },
  ];
  return (
    <section className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-lg text-gray-400">
            Explore some of the projects we've worked on and see our work in
            action.
          </p>
        </div>
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
            >
              <a href={project.link} className="block">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
