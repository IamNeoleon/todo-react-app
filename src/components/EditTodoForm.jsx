import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
   const [inputValue, setInputValue] = useState(task.task);

   const handleChange = (e) => {
      setInputValue(e.target.value)
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      editTodo(inputValue, task.id);
      setInputValue("")
   }

   return (
      <form className="todo__form" onSubmit={handleSubmit}>
         <input value={inputValue} type="text" className="todo__input" placeholder="Обновить задачу" onChange={handleChange} />
         <button type="submit" className="todo__btn">Изменить задачу</button>
      </form>
   )
}

export default EditTodoForm;