import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";

const TodoPage = () => {
  const [tasks, setTasks] = useState([]);

  
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  
  const getNextTaskId = () => {
    if (tasks.length === 0) return 1;
    const maxId = Math.max(...tasks.map((task) => task.id));
    return maxId + 1;
  };

  // Add task
  const addTask = (text) => {
    const newTask = { id: getNextTaskId(), text, status: "pending" };
    setTasks([...tasks, newTask]);
  };

  // Delete  task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //  task status
  const toggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "pending" ? "completed" : "pending" }
          : task
      )
    );
  };

  // Edit task
  const editTask = (id, updatedText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: updatedText } : task
      )
    );
  };

  return (
    <div className="todo-page">
      <h1>Todo App</h1>
      <TodoForm addTask={addTask} />
      <ul className="todo-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleStatus={toggleStatus}
              editTask={editTask}
            />
          ))
        ) : (
          <p>No tasks yet!</p>
        )}
      </ul>
      <div className="task-links">
        {tasks.map((task) => (
          <Link key={task.id} to={`/task/${task.id}`}>
            <button>View Details</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TodoPage;
