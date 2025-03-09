import React, { useState } from 'react'
import styles from './AddToDo.module.css'

function AddToDo({ dispatch, setShowModal }) {
	const [text, setText] = useState('')

	const handleSubmit = () => {
		if (!text.trim()) {
			setShowModal(true)
			return
		}
		dispatch({
			type: 'ADD_TODO',
			payload: {
				id: Date.now(),
				text,
				date: new Date().toLocaleString(),
				done: false,
			},
		})
		setText('')
	}

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
	)
}

export default AddToDo
