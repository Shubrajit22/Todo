import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([{}]);

  async function create() {
    const newTodo = document.getElementById("todo").value;
    const response = await axios.post("http://localhost:3000/create-todo", {
      title:newTodo
    }); // Use POST if needed
    alert("created");
  }

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/get-todos');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, [todos]);

  return (
    <div>
      <input id="todo" type="text" />
      <button onClick={create}>Create</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;