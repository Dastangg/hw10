import React, { useReducer, useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import ToDos from './components/ToDos'
import AddToDo from './components/AddToDo'
import Modal from './components/Modal'

const reducer = (state, action) => {
  if (action.type === 'ADD_TODO') {
    return [...state, action.payload];
  } else if (action.type === 'TOGGLE_TODO') {
    return state.map((todo) =>
      todo.id === action.payload
        ? { ...todo, done: !todo.done }
        : todo
    );
  } else if (action.type === 'SET_TODOS') {
    return action.payload;
  } else {
    return state;
  }
};


function App() {
	const [todos, dispatch] = useReducer(reducer, [])
	const [showModal, setShowModal] = useState(false)

// useEffect используется для загрузки задач из localStorage при монтировании компонента и для сохранения задач в localStorage при изменении состояния.
  
	useEffect(() => {
		const stored = localStorage.getItem('todos')
		if (stored) {
			dispatch({ type: 'SET_TODOS', payload: JSON.parse(stored) })
		}
	}, [])

	useEffect(() => {
		if (todos.length > 0) {
			localStorage.setItem('todos', JSON.stringify(todos))
		}
	}, [todos])

	return (
		<div className='App'>
			<h1 className='Text'> Моя Тудушка</h1>
			<Card>
				<AddToDo dispatch={dispatch} setShowModal={setShowModal} />
				<ToDos todos={todos} dispatch={dispatch} />
			</Card>
			{showModal && <Modal onClose={() => setShowModal(false)} />}
		</div>
	)
}

export default App





