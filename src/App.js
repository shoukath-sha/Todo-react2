import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/task/:id" element={<TaskDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

