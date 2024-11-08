import React, { useContext, useState } from 'react';
import { DataContext } from '../context/Context';
import { Link } from 'react-router-dom';
import TodoItem from '../Components/TodoItem';
import { Toaster } from 'react-hot-toast';

const Home = () => {
    const { todos, setTodos } = useContext(DataContext);
    const [draggedTodoId, setDraggedTodoId] = useState(null);

    // Filter todos by status
    const todosToDo = todos.filter(todo => todo.status === 'todo');
    const todosInProgress = todos.filter(todo => todo.status === 'in-progress');
    const todosDone = todos.filter(todo => todo.status === 'done');

    // Event handlers for drag-and-drop
    const handleDragStart = (todoId) => {
        setDraggedTodoId(todoId);
    };

    const handleDrop = (newStatus) => {
        if (draggedTodoId !== null) {
            const updatedTodos = todos.map((todo) =>
                todo.id === draggedTodoId ? { ...todo, status: newStatus } : todo
            );
            setTodos(updatedTodos);
            setDraggedTodoId(null);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div className="w-4/5 mx-auto mt-4">
            <Toaster />
            <h1 className="text-3xl font-black text-blue-900 uppercase text-center">Kanban Dashboard</h1>
            <p className="text-lg font-medium py-3 text-gray-700 text-center">
                Welcome to the Kanban Dashboard, a simple project management tool.
            </p>

            <div className="flex flex-wrap gap-2 mt-3 items-start">
               <div className="sm:w-1/4 flex-1 p-4 border">
               <Link to="/new" className="inline-block w-full rounded-sm bg-blue-500 hover:bg-blue-500/80 mb-4 text-center text-white px-2 py-2">
                        Add Task
                    </Link>
                    <h2 className="text-2xl font-black text-blue-900 uppercase text-center">To Do</h2>
                    <p className="text-lg font-medium py-3 border-b-2 border-dashed text-gray-700 text-center">This is the list of tasks that need to be done.</p>
                   
                 {/* To Do Column */}
                 <div
                    className=" overflow-y-auto max-h-48 mt-2" 
                    onDragOver={handleDragOver}
                    onDrop={() => handleDrop('todo')}
                >
                    {todosToDo.length === 0 ? (
                        <p className="text-center text-lg font-medium bg-gray-100 p-3 text-gray-700">No tasks available</p>
                    ) : (
                        todosToDo.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                className={'bg-gray-50'}
                                draggable
                                onDragStart={() => handleDragStart(todo.id)}
                            />
                        ))
                    )}
                </div>

               </div>
                {/* In Progress Column */}
                <div
                    className="sm:w-1/3 p-4 border sm:flex-none overflow-y-auto max-h-96" // Make this scrollable
                    onDragOver={handleDragOver}
                    onDrop={() => handleDrop('in-progress')}
                >
                    <h2 className="text-2xl font-black text-blue-900 uppercase text-center">In Progress</h2>
                    <p className="text-lg font-medium py-3 text-gray-700 text-center">This is the list of tasks that are currently in progress.</p>
                    {todosInProgress.length === 0 ? (
                        <p className="text-center text-lg font-medium bg-gray-100 p-3 text-gray-700">No tasks available. Drag them from the To Do list.</p>
                    ) : (
                        todosInProgress.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                className={'bg-orange-100'}
                                draggable
                                onDragStart={() => handleDragStart(todo.id)}
                            />
                        ))
                    )}
                </div>

                {/* Done Column */}
                <div
                    className="sm:w-1/3 p-4 border sm:flex-none overflow-y-auto max-h-96" // Make this scrollable
                    onDragOver={handleDragOver}
                    onDrop={() => handleDrop('done')}
                >
                    <h2 className="text-2xl font-black text-blue-900 uppercase text-center">Done</h2>
                    <p className="text-lg font-medium py-3 text-gray-700 text-center">This is the list of tasks that have been done.</p>
                    {todosDone.length === 0 ? (
                        <p className="text-center text-lg font-medium bg-gray-100 p-3 text-gray-700">No tasks available. Drag them from the In Progress list.</p>
                    ) : (
                        todosDone.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                className={'bg-green-100'}
                                draggable
                                onDragStart={() => handleDragStart(todo.id)}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
