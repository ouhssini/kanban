import { ArrowLeftCircle } from "lucide-react";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/Context";
import toast, { Toaster } from "react-hot-toast";

const New = () => {
  const { todos, setTodos } = useContext(DataContext);
  const lastId =
    todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) : 0;
  const [formData, setFormData] = useState({
    id: lastId + 1,
    title: "",
    description: "",
    status: "todo",
  });
  const [error, setError] = useState({
    title: "",
    description: "",
  });
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      id: lastId + 1,
    }));
  }, [todos]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.trim() === "" ? "" : value.replace(/\s+/g, " "),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() === "" || formData.title.length > 40) {
      setError((prevError) => ({
        ...prevError,
        title: "Title is required and should be less than 40 characters",
      }));
      return;
    } else {
      setTodos([...todos, formData]);
      setFormData({
        id: lastId + 2,
        title: "",
        description: "",
        status: "todo",
      });
      setError({
        title: "",
        description: "",
      });
      toast.success("Task added successfully");
    }
  };

  return (
    <>
      <Toaster />
      <div className="mx-auto w-11/12 md:w-2/5 mt-10 bg-gray-100 p-10 rounded-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              name="title"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {error.title && (
              <p className="text-xs text-red-500">{error.title}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={formData.description}
              name="description"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              rows="3"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              value={formData.status}
              name="status"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={!formData.title.trim()}
            className={`inline-block w-full rounded-sm px-2 py-2 text-center text-white ${
              formData.title.trim()
                ? "bg-blue-500 hover:bg-blue-500/80"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Add Task
          </button>
        </form>
        <Link to="/" className="justify-center gap-2 text-blue-500 mt-5 flex">
          <ArrowLeftCircle /> <span>Go Back</span>
        </Link>
      </div>
    </>
  );
};

export default New;
