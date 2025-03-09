import React from 'react'
import styles from './Modal.module.css'

function Modal({ onClose }) {
	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modalContent}>
				<p>Пожалуйста, напишите текст!</p>
				<button onClick={onClose}>Закрыть</button>
			</div>
		</div>
	)
}

export default Modal
