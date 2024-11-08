import React, { useContext, useState } from "react";
import TodoItem from "./TodoItem";
import { DataContext } from "../context/Context";

const Col = ({ data, type, bg, title, description }) => {
  const { todos, setTodos ,draggedTodoId,setDraggedTodoId} = useContext(DataContext);

  const handleDragStart = (todoId) => {
    setDraggedTodoId(todoId);
  };

  const handleDrop = () => {
    if (draggedTodoId !== null) {
      const updatedTodos = todos.map((t) =>
        t.id === draggedTodoId ? { ...t, status: type } : t
      );
      setTodos(updatedTodos);
      setDraggedTodoId(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="flex-1 basis-80 p-4 border"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h2 className="text-2xl font-black text-blue-900 uppercase text-center border-b-4 border-blue-900 px-2 w-fit mx-auto pb-3">
        {title}
      </h2>
      <p className="text-lg font-medium py-3 text-gray-700 text-center">
        {description}
      </p>
      <div className="overflow-y-auto max-h-60 mt-2 p-4 border">
        {data.length === 0 ? (
          <p className="text-center text-lg font-medium bg-gray-100 p-3 text-gray-700">
            No tasks available
          </p>
        ) : (
          data.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              className={bg}
              onDragStart={(e) => handleDragStart(todo.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Col;
