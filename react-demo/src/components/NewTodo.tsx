import React, { FormEvent, useRef } from "react";

// type NewTodoProps = {
//   onAddTodo: (todoText: string) => void;
// }

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
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
