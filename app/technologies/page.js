import React from "react";

export default function page() {
  const technologies = [
    {
      name: "JavaScript",
      description:
        "A versatile programming language commonly used for web development to create interactive effects within web browsers.",
      icon: "./js.png",
    },
    {
      name: "React",
      description:
        "A JavaScript library for building user interfaces. React allows developers to create large web applications that can change data without reloading the page.",
      icon: "./react.png",
    },
    {
      name: "Next.js",
      description:
        "A React framework for server-rendered applications, offering features like static site generation and server-side rendering.",
      icon: "./nextjs.png",
    },
    {
      name: "Node.js",
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine that helps build scalable network applications.",
      icon: "./nodejs.png",
    },
    {
      name: "MySQL",
      description:
        "A widely used open-source relational database management system known for its speed and reliability.",
      icon: "./mysql.png",
    },
    {
      name: "PostgreSQL",
      description:
        "An open-source relational database with advanced features and extensibility for complex queries and large datasets.",
      icon: "./postgres.png",
    },
    {
      name: "MongoDB",
      description:
        "A NoSQL database known for its flexibility and scalability, allowing for the storage of unstructured data.",
      icon: "./mongodb.png",
    },
    {
      name: "Express.js",
      description:
        "A minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.",
      icon: "./express.png",
    },
    {
      name: "Ruby on Rails",
      description:
        "A server-side web application framework written in Ruby under the MIT License, providing default structures for a database, a web service, and web pages.",
      icon: "./rails.png",
    },
    {
      name: "Flutter",
      description:
        "A UI toolkit from Google for building natively compiled applications for mobile, web, and desktop from a single codebase.",
      icon: "./flutter.png",
    },
    {
      name: "Firebase",
      description:
        "A platform developed by Google for creating mobile and web applications, providing backend services such as real-time databases, authentication, and hosting.",
      icon: "./firebase.svg",
    },
    {
      name: "AWS",
      description:
        "Amazon Web Services provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.",
      icon: "./aws.png",
    },
  ];
  return (
    <section className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Technologies We Use
          </h1>
          <p className="text-lg text-gray-400">
            Explore the technologies and tools that power our projects and
            solutions.
          </p>
        </div>
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
            >
              <div className="p-6 flex items-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 mr-4 object-contain"
                />
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-2">
                    {tech.name}
                  </h2>
                  <p className="text-gray-400">{tech.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
