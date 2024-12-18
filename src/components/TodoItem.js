import React, { useState } from "react";

const TodoItem = ({ task, deleteTask, toggleStatus, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    editTask(task.id, newText);
    setIsEditing(false); 
  };

  return (
    <li className={`todo-item ${task.status}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => toggleStatus(task.id)}>
            Mark as {task.status === "pending" ? "Completed" : "Pending"}
          </button>
          <button onClick={handleEditToggle}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
