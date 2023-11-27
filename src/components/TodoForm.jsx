import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
   const [inputValue, setInputValue] = useState('');

   const handleChange = (e) => {
      setInputValue(e.target.value)
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue === '') {
         alert('Ввведите норм задачу!');
      } else {
         addTodo(inputValue);
      }
      setInputValue("")
   }

   return (
      <form className="todo__form" onSubmit={handleSubmit}>
         <input value={inputValue} type="text" className="todo__input" placeholder="Что вы хотите сделать сегодня?" onChange={handleChange} />
         <button type="submit" className="todo__btn">Добавить задание</button>
      </form>
   )
}

export default TodoForm;