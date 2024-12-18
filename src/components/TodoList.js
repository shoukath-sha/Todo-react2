import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, deleteTask, toggleStatus, updateTask }) => {
  return (
    <ul className="todo-list">
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleStatus={toggleStatus}
            updateTask={updateTask}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;
