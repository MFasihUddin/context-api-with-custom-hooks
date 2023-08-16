import { useState } from "react";
import { v4 as uuid } from "uuid";

const useTodoState = (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos);
  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    },
    removeTodo: (id) => {
      const remainingTodo = todos.filter((todo) => todo.id !== id);
      setTodos(remainingTodo);
    },
    toggleTodo: (todoId) => {
      const updatedTodo = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodo);
    },
    updateTodo: (id, newText) => {
      const updatedTodo = todos.map((todo) =>
        todo.id === id ? { ...todo, task: newText } : todo
      );
      setTodos(updatedTodo);
    },
  };
};

export default useTodoState;
