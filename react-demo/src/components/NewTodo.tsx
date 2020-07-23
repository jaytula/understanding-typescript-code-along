import React, { FormEvent, useRef } from "react";

const NewTodo: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    console.log(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input id="todo-text" type="text" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};
export default NewTodo;
