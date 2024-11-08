import { Trash } from "lucide-react";
import React, { useContext } from "react";
import { DataContext } from "../context/Context";
import toast from "react-hot-toast";

const TodoItem = ({ todo, onDragStart, className }) => {
  const { todos, setTodos } = useContext(DataContext);
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const newTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(newTodos);
      toast.success("Task deleted successfully");
    }
  };
  return (
    <div
      className={`p-3 rounded-sm shadow-sm my-2 flex cursor-move ${className}`}
      draggable
      onDragStart={onDragStart}
    >
     <div className="">
     <h3 className="text-lg font-semibold  text-blue-700 mb-2">{todo.title}</h3>
     <p className="text-sm text-gray-700">{todo.description}</p>
     </div>
      {(todo.status === "done" || todo.status === "todo") && (
        <Trash
          className="ml-auto size-6 shadow-md cursor-pointer bg-gray-400 rounded-full p-1 text-red-400"
          onClick={handleDelete}
        />
      )}
    </div>
  );
};

export default TodoItem;
