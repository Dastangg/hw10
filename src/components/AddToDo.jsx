import React, { useState, useContext } from 'react';
import styles from './AddToDo.module.css';
import { TodoContext } from '../context/ToDoContext';

function AddToDo({ setShowModal }) {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = () => {
    if (!text.trim()) {
      setShowModal(true);
      return;
    }
    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: Date.now(),
        text,
        date: new Date().toLocaleString(),
        done: false,
      },
    });
    setText('');
  };

  return (
    <div className={styles.addTodo}>
      <input
        type='text'
        placeholder='Новая задача'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>Добавить</button>
    </div>
  );
}

export default AddToDo;
