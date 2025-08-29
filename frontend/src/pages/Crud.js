import React, { useState, useEffect } from "react";
import axios from "axios";

function Crud() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await axios.get("/api/items");
    setItems(res.data);
  };

  const addItem = async () => {
    await axios.post("/api/items", { text });
    setText("");
    fetchItems();
  };

  const deleteItem = async (id) => {
    await axios.delete("/api/items/" + id);
    fetchItems();
  };

  return (
    <div>
      <h2>CRUD Items</h2>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map(i => (
          <li key={i._id}>
            {i.text} <button onClick={() => deleteItem(i._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
