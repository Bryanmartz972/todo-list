import Button from './Button'
import PropTypes from 'prop-types'

const Task = ({ id, icon, title, description }) => {
	const deleteTask = () => {
		const tasks = JSON.parse(localStorage.getItem('tasks'))
		tasks.splice(id, 1)
		localStorage.setItem('tasks', JSON.stringify(tasks))
		window.location.reload(false)
	}

	return (
		<button className='flex flex-row items-center rounded-md shadow-md p-4'>
			<div className='rounded-full border w-3.5 h-3.5'></div>
			<div className='grow w-[70%] text-start mx-3'>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<Button onClick={deleteTask} color='bg-secondary'>
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
