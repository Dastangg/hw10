import React, { useContext } from 'react';
import styles from './ToDos.module.css';
import { TodoContext } from '../context/ToDoContext';

function ToDos() {
  const { todos, dispatch } = useContext(TodoContext);

  const formateDate = (date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const day = String(newDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`${styles.todoItem} ${todo.done ? styles.done : ''}`}
          onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
        >
          <span>{todo.text}</span>
          <small>{formateDate(todo.date)}</small>
        </div>
      ))}
    </div>
  );
}

export default ToDos;
