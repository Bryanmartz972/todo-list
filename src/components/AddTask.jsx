import Button from './Button'
import { MdAddTask } from 'react-icons/md'
import { useState } from 'react'
import db from '../helpers/db'

const { todos } = db

const AddTask = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const addTask = async e => {
		e.preventDefault()
		await todos.add({
			title: title,
			description: description,
			completed: false,
		})

		setTitle('')
		setDescription('')
	}

	const handleChange = e => {
		const { name, value } = e.target
		if (name === 'title') {
			setTitle(value)
		} else {
			setDescription(value)
		}
	}

	return (
		<form
			className='shadow-md rounded-md flex flex-col p-4 gap-4'
			onSubmit={addTask}>
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
					data-cy='titletask-input'
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
					onChange={handleChange}
					data-cy='descriptiontask-input'></textarea>
			</label>
			<Button
				onClick={() => addTask}
				text='Add task'
				color='bg-accent'
				dataQA={'addtask-button'}>
				<MdAddTask size='1.2rem' color='#fffffe' />
			</Button>
		</form>
	)
}

export default AddTask
