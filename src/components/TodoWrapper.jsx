import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
uuidv4()

const TodoWrapper = () => {
   const [todos, setTodos] = useState([]);

   const addTodo = (todo) => {
      setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
      console.log(todos);
   }

   const toggleComplete = (id) => {
      setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
   }

   const deleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id))
   }

   const editTodo = (id) => {
      setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
   }

   const editTask = (task, id) => {
      setTodos(todos.map(todo => todo.id === id ? {
         ...todo, task, isEditing: !todo.isEditing
      } : todo
      ))
   }

   return (
      <div className="todo__wrapper">
         <h1 className="todo__title">Get thins Done</h1>
         <TodoForm addTodo={addTodo} />
         <div className="todo__items">
            {todos.map((todo, index) => (
               todo.isEditing ? (
                  <EditTodoForm editTodo={editTask} task={todo} key={index} />
               ) : (
                  <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
               )
            ))}
         </div>
      </div>
   )
}

export default TodoWrapper;