"use client";
import React, { useState, useEffect } from "react";

export default function ProjectsDashboard() {
  const [projects, setProjects] = useState([]);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/projects");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleAddProject = async (project) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      });
      if (!response.ok) {
        throw new Error("Failed to add project");
      }
      const newProject = await response.json();
      setProjects([...projects, newProject]);
      setShowAddPopup(false);
    } catch (error) {
      console.error("Error adding project:", error);
      setError("Failed to add project. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateProject = async (project) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/projects?id=${project.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      });
      if (!response.ok) {
        throw new Error("Failed to update project");
      }
      const updatedProject = await response.json();
      setProjects(
        projects.map((p) => (p.id === updatedProject.id ? updatedProject : p))
      );
      setShowUpdatePopup(false);
    } catch (error) {
      console.error("Error updating project:", error);
      setError("Failed to update project. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/projects?id=${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete project");
      }
      setProjects((prev) => prev.filter((project) => project.id !== id));
    } catch (error) {
      console.error("Error deleting project:", error);
      setError("Failed to delete project. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-300 p-6 flex justify-center items-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-300 p-6 flex justify-center items-center">
        <div className="text-2xl text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-6">
      <header className="bg-gray-800 text-white p-4 flex justify-between">
        <h1 className="text-2xl font-bold">Admin Dashboard (PROJECTS)</h1>
        <button
          className="bg-green-900 p-2 font-bold text-white rounded-md"
          onClick={() => setShowAddPopup(true)}
        >
          Add New Project
        </button>
      </header>

      <main className="mt-6">
        {projects.length === 0 ? (
          <div className="text-center text-xl">No projects found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left whitespace-nowrap">
              <thead>
                <tr className="bg-gray-700 text-gray-200">
                  <th className="p-4">Image</th>
                  <th className="p-4">Title</th>
                  <th className="p-4">Description</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="bg-gray-800 text-gray-300">
                    <td className="p-4">
                      <img
                        src={project.imageurl || "/placeholder-image.jpg"}
                        alt={project.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="p-4">{project.title}</td>
                    <td className="p-4">{project.description}</td>
                    <td className="p-4">
                      <button
                        className="bg-blue-700 p-2 font-bold mr-2 rounded-md"
                        onClick={() => {
                          setSelectedProject(project);
                          setShowUpdatePopup(true);
                        }}
                      >
                        Update
                      </button>
                      <button
                        className="bg-red-600 font-bold p-2 rounded-md"
                        onClick={() => handleDeleteProject(project.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {showAddPopup && (
        <AddProjectPopup
          onClose={() => setShowAddPopup(false)}
          onSubmit={handleAddProject}
        />
      )}

      {showUpdatePopup && selectedProject && (
        <UpdateProjectPopup
          project={selectedProject}
          onClose={() => setShowUpdatePopup(false)}
          onSubmit={handleUpdateProject}
        />
      )}
    </div>
  );
}

// Add Project Popup Component
function AddProjectPopup({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageurl: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-white">Add New Project</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full p-2 mb-4 bg-gray-700 text-white"
            placeholder="Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <input
            className="w-full p-2 mb-4 bg-gray-700 text-white"
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <input
            className="w-full p-2 mb-4 bg-gray-700 text-white"
            placeholder="Image URL"
            value={formData.imageurl}
            onChange={(e) =>
              setFormData({ ...formData, imageurl: e.target.value })
            }
          />
          <button
            type="submit"
            className="bg-green-900 p-2 font-bold rounded-md text-white"
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-gray-900 font-bold p-2 rounded-md ml-4 text-white"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

// Update Project Popup Component
function UpdateProjectPopup({ project, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: project.title,
    description: project.description,
    imageurl: project.imageurl || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...project, ...formData });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-white">Update Project</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full p-2 mb-4 bg-gray-700 text-white"
            placeholder="Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <input
            className="w-full p-2 mb-4 bg-gray-700 text-white"
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <input
            className="w-full p-2 mb-4 bg-gray-700 text-white"
            placeholder="Image URL"
            value={formData.imageurl}
            onChange={(e) =>
              setFormData({ ...formData, imageurl: e.target.value })
            }
          />
          <button
            type="submit"
            className="bg-green-900 p-2 font-bold rounded-md text-white"
          >
            Update
          </button>
          <button
            type="button"
            className="bg-gray-900 font-bold p-2 rounded-md ml-4 text-white"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
