import React, { useContext } from "react";
import { DataContext } from "../context/Context";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Col from "../Components/Col";

const Home = () => {
  const { todos } = useContext(DataContext);

  const Datas = [
    {
      title: "Todo",
      description: "Tasks that need to be completed.",
      type: "todo",
      bg: "bg-gray-50",
      data: todos.filter((todo) => todo.status === "todo"),
    },
    {
      title: "In Progress",
      description: "Tasks that are currently being worked on.",
      type: "in-progress",
      bg: "bg-orange-100",
      data: todos.filter((todo) => todo.status === "in-progress"),
    },
    {
      title: "Done",
      description: "Tasks that have been finished.",
      type: "done",
      bg: "bg-green-100",
      data: todos.filter((todo) => todo.status === "done"),
    },
  ];
  

  return (
    <div className="w-4/5 mx-auto mt-4">
      <Toaster />
      <h1 className="text-3xl font-black text-blue-900 uppercase text-center">
        Kanban Dashboard
      </h1>
      <p className="text-lg font-medium py-3 text-gray-700 text-center">
        Welcome to the Kanban Dashboard, a simple project management tool.
      </p>
      <Link
        to="/new"
        className="inline-block w-full md:w-fit px-5 rounded-sm bg-blue-500 hover:bg-blue-600 mb-4 text-center text-white py-2"
      >
        Add Task
      </Link>
      <div className="flex flex-wrap gap-4 mt-3">
        {Datas.map((data) => (
          <Col
            key={data.title}
            data={data.data}
            type={data.type}
            bg={data.bg}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
