import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [draggedTodoId, setDraggedTodoId] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <DataContext.Provider value={{ todos, setTodos ,draggedTodoId,setDraggedTodoId}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
