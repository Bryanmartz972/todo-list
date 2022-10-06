import Button from './Button'
import PropTypes from 'prop-types'
import Todolist from '../pages/Todolist'
import db from '../helpers/db'

const { todos } = db

const Task = ({ id, icon, title, description }) => {
	const deleteTask = async id => todos.delete(id)

	const completeTask = async(id, event) => {
		await todos.update(id, {completed: !event.target.checked})
	}

	return (
		<button className='flex flex-row items-center rounded-md shadow-md p-4'>
			<div className='rounded-full border w-3.5 h-3.5'></div>
			<div className='grow w-[70%] text-start mx-3'>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<Button
				color='bg-secondary'
				dataQA='deletetask-button'
				onClick={() => deleteTask(id)}>
				{icon}
			</Button>
		</button>
	)
}

Task.propTypes = {
	id: PropTypes.number,
	icon: PropTypes.node,
	title: PropTypes.string,
	description: PropTypes.string,
}

export default Task
