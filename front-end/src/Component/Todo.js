import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Todo = () => {
  const API_URL = "http://localhost:8000/crud";
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [editId, setEditId] = useState(null);

  // Fetch all todos
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Create or update a todo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      // Update existing todo
      axios
        .put(`${API_URL}/${editId}`, formData)
        .then((response) => {
          setTodos((prevTodos) =>
            prevTodos.map((todo) =>
              todo._id === editId ? response.data : todo
            )
          );
          setEditId(null);
        })
        .catch((error) =>
          console.error("There was an error updating the todo!", error)
        );
    } else {
      // Create new todo
      axios
        .post(API_URL, formData)
        .then((response) => {
          setTodos([...todos, response.data]);
        })
        .catch((error) =>
          console.error("There was an error creating the todo!", error)
        );
    }
    setFormData({ title: "", description: "" });
  };

  // Edit a todo
  const handleEdit = (id) => {
    const todoToEdit = todos.find((todo) => todo._id === id);
    setFormData({
      title: todoToEdit.title,
      description: todoToEdit.description,
    });
    setEditId(id);
  };

  // Delete a todo
  const handleDelete = (id) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => {
        setTodos(todos.filter((todo) => todo._id !== id));
      })
      .catch((error) =>
        console.error("There was an error deleting the todo!", error)
      );
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <p>By using MERN Stack...</p>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
        <button type="submit">{editId ? "Update Todo" : "Add Todo"}</button>
      </form>

      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo._id} className="todo-item">
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button onClick={() => handleEdit(todo._id)}>Edit</button>
            <button onClick={() => handleDelete(todo._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
