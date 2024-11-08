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
      <h3 className="text-base">{todo.title}</h3>
      {(todo.status === "done" || todo.status === "todo") && (
        <Trash
          className="ml-auto cursor-pointer text-red-400"
          onClick={handleDelete}
        />
      )}
    </div>
  );
};

export default TodoItem;
