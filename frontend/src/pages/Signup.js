import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/auth/signup", form);
    alert("User signed up!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input placeholder="Password" type="password" onChange={e => setForm({...form, password: e.target.value})} />
      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;
