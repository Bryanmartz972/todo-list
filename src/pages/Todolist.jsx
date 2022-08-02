import Task from '../components/Task'
import AddTask from '../components/AddTask'
import { MdOutlineCancel } from 'react-icons/md'
import { useEffect, useState } from 'react'

const Todolist = () => {
	const [tasks, setTasks] = useState([])

	useEffect(() => {
		if (localStorage.getItem('tasks') === null) {
			localStorage.setItem('tasks', JSON.stringify([]))
		} else {
			const tasks = JSON.parse(localStorage.tasks)
			setTasks(tasks)
		}
	}, [])

	return (
		<section className='flex flex-col gap-4 max-w-[400px] bg-background px-4 my-4 m-auto'>
			<h1>My tasks</h1>
			<AddTask />
			{tasks.map((task, index) => (
				<Task
					key={index}
					id={index}
					title={task.title}
					description={task.description}
					icon={<MdOutlineCancel color='#fffffe' size='1.4rem' />}
				/>
			))}
		</section>
	)
}

export default Todolist
