import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Welcome to Fullstack App</h1>
      <nav>
        <Link to="/signup">Signup</Link> | 
        <Link to="/login">Login</Link> | 
        <Link to="/crud">CRUD</Link>
      </nav>
    </div>
  );
}

export default App;
