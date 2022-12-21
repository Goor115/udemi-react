import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompletd: false,
      id: uuidv4(),
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodoHendler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHendler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const resetTodosHendler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  return (
    <div className="App">
      <h1>Todo app</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodosActions
        resetTodos={resetTodosHendler}
        deleteComplatedTodos={deleteCompletedTodosHandler}
      />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHendler}
        toggleTodo={toggleTodoHendler}
      />
    </div>
  );
}

export default App;
