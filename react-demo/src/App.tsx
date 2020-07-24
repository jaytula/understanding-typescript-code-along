import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const initialTodos = [{id: 't1', text: 'Finish the course'}]
const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const todoAddHandler = (text: string) => {
    console.log(text);
    setTodos(todos => [...todos, {id: new Date().toString(), text: text}]);
  }
  return <div className="App">
    <NewTodo onAddTodo={todoAddHandler} />
    <TodoList items={todos} />
  </div>;
};

export default App;
