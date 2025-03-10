import { createContext, useReducer, useEffect } from 'react'

export const TodoContext = createContext()

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [...state, action.payload]
		case 'TOGGLE_TODO':
			return state.map((todo) =>
				todo.id === action.payload
					? { ...todo, done: !todo.done }
					: todo,
			)
		case 'SET_TODOS':
			return action.payload
		default:
			return state
	}
}

const TodoProvider = ({ children }) => {
	const [todos, dispatch] = useReducer(reducer, [])

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem('todos')) || []
		dispatch({ type: 'SET_TODOS', payload: storedTodos })
	}, [])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	return (
		<TodoContext.Provider value={{ todos, dispatch }}>
			{children}
		</TodoContext.Provider>
	)
}

export default TodoProvider
