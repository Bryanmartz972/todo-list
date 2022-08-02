import Button from './Button'
import { MdAddTask } from 'react-icons/md'
import { useState } from 'react'

const AddTask = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const handleChange = e => {
		const { name, value } = e.target
		if (name === 'title') {
			setTitle(value)
		} else {
			setDescription(value)
		}
	}

	const handleSubmit = e => {
		setTitle(prev => prev.trim())
		setDescription(prev => prev.trim())
		e.preventDefault()
		const tasks = JSON.parse(localStorage.getItem('tasks'))
		const newTask = { title, description, completed: false }
		tasks.push(newTask)
		localStorage.setItem('tasks', JSON.stringify(tasks))
		setTitle('')
		setDescription('')
		window.location.reload(false)
	}

	return (
		<form
			className='shadow-md rounded-md flex flex-col p-4 gap-4'
			onSubmit={handleSubmit}>
			<label htmlFor='title'>
				<h3>Title of task</h3>
				<input
					type='text'
					id='title'
					name='title'
					minLength='4'
					maxLength='40'
					required
					placeholder='Title of task'
					className='w-full p-1 border-2 rounded-sm'
					value={title}
					onChange={handleChange}
				/>
			</label>
			<label htmlFor='description'>
				<h3>Description of task</h3>
				<textarea
					name='description'
					id='description'
					rows='4'
					maxLength='150'
					placeholder='Description of task'
					className='w-full p-1 border-2 rounded-sm'
					value={description}
					onChange={handleChange}></textarea>
			</label>
			<Button onClick={() => handleSubmit} text='Add task' color='bg-accent'>
				<MdAddTask size='1.2rem' color='#fffffe' />
			</Button>
		</form>
	)
}

export default AddTask
