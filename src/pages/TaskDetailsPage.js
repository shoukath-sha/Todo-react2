import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const TaskDetailsPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const foundTask = tasks.find((t) => t.id === parseInt(id));
    setTask(foundTask);
  }, [id]);

  return (
    <div className="task-details">
      {task ? (
        <>
          <h2>Task Details</h2>
          <p><strong>ID:</strong> {task.id}</p>
          <p><strong>Text:</strong> {task.text}</p>
          <p><strong>Status:</strong> {task.status}</p>
          <Link to="/todo">
            <button>Back to Tasks</button>
          </Link>
        </>
      ) : (
        <p>Task not found</p>
      )}
    </div>
  );
};

export default TaskDetailsPage;
