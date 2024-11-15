import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([{}]);
  const [count,setCount] = useState(0);
 const [input,setInput] = useState("");
 function onChange(e){
  setInput(e.target.value);
}
  async function create() {
   
    
    const response = await axios.post("http://localhost:3000/create-todo", {
      title:input
    }); // Use POST if needed
    alert("created");
    setCount(c=>c+1);
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
  }, [count]);

  return (
    <div>
      <input id="todo" type="text" onChange={onChange}/>
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