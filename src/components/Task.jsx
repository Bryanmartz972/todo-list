import Button from './Button'
import PropTypes from 'prop-types'
import db from '../helpers/db'
import { useState } from 'react'

const { todos } = db

const Task = ({ task }) => {
	const [completed, setCompleted] = useState(task?.completed || false)

	const deleteTask = async () => await todos.delete(task.id)

	const completeTask = async event => {
		setCompleted(prev => !prev)
		await todos.update(task.id, { completed: event })
	}

	return (
		<li className='flex flex-row items-center rounded-md bg-secondary shadow-md p-4'>
			<input
				type='checkbox'
				checked={completed}
				onChange={e => completeTask(e.target.checked)}
				className='rounded-full border w-3.5 h-3.5'></input>
			<div className='grow w-[70%] text-start mx-3'>
				<h2>{task.title}</h2>
				<p>{task.description}</p>
			</div>
			<Button
				color='bg-accent'
				dataQA='deletetask-button'
				onClick={() => deleteTask(task.id)}>
				{/* {icon} */}
			</Button>
		</li>
	)
}

Task.propTypes = {
	id: PropTypes.number,
	icon: PropTypes.node,
	title: PropTypes.string,
	description: PropTypes.string,
}

export default Task
