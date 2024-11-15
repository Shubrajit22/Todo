const express = require('express');
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173"
}));
const todos = [{}];
app.get('/get-todos',(req,res)=>{
    res.send(
      todos
    
     
    ).status(200)
})
app.post('/create-todo',(req,res)=>{
  
    const newTodo = {
        id : todos.length,
        title:req.body.title
    }
    console.log(newTodo)
   todos.push(newTodo)
    res.json({
        message:"todo is crated "
    })
})
console.log(todos)
app.listen(3000,()=>{
    console.log(`http://localhost:3000`);
})