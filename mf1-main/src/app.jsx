import React, { useState } from 'react';
import Style from './style.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showStats, setShowStats] = useState(false);

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, isCompleted: false }]);
      setInputValue("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  const completedTasks = todos.filter((todo) => todo.isCompleted).length;
  const remainingTasks = todos.length - completedTasks;

  return (
    <div className={'mf1'}>
      <div className="todo-container">
        {!showStats ? (
          <>
            <h1>Todo Application</h1>
            <div className="input-container">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a todo"
              />
              <button onClick={addTodo}>Add</button>
            </div>
            <ul className="todo-list">
              {todos.map((todo, index) => (
                <li key={index} className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
                  <span>{todo.text}</span>
                  <div className="actions">
                    <button onClick={() => toggleComplete(index)} className="complete-btn">
                      {todo.isCompleted ? "Unmark" : "Complete"}
                    </button>
                    <button onClick={() => deleteTodo(index)} className="delete-btn">Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="stats">
            <h2>Task Statistics</h2>
            <p>Completed Tasks: {completedTasks}</p>
            <p>Remaining Tasks: {remainingTasks}</p>
          </div>
        )}
        <button onClick={() => setShowStats(!showStats)} className="stats-btn">
          {showStats ? "Back to Todos" : "Show Stats"}
        </button>
      </div>
    </div>
  );
};

export default App;