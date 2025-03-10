import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import ToDos from './components/ToDos';
import AddToDo from './components/AddToDo';
import Modal from './components/Modal';
import TodoProvider from './context/ToDoContext';


function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <TodoProvider>
      <div className='App'>
        <h1 className='Text'>Моя Тудушка</h1>
        <Card>
          <AddToDo setShowModal={setShowModal} />
          <ToDos />
        </Card>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </div>
    </TodoProvider>
  );
}

export default App;
