import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Todo App</h1>
      <Link to="/todo">
        <button>Go to Todo Page</button>
      </Link>
      <Link to="/EditTaskPage">
        <button>Go to product details</button>
      </Link>
    </div>
  );
};

export default HomePage;
