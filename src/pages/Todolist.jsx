import Task from '../components/Task'
import AddTask from '../components/AddTask'
import { MdOutlineCancel } from 'react-icons/md'
import { useLiveQuery } from 'dexie-react-hooks'
import db from '../helpers/db'

const { todos } = db

const Todolist = () => {
	const allItems = useLiveQuery(() => todos.toArray(), [])

	return (
		<section className='flex flex-col gap-4 max-w-[400px] bg-background px-4 my-4 m-auto'>
			<h1 data-cy='todolist-title'>My tasks</h1>
			<AddTask />
			<section data-cy='tasks-container' className='flex flex-col'>
				{allItems?.map(({ id, title, description }) => (
					<Task
						key={id}
						id={id}
						title={title}
						description={description}
						icon={<MdOutlineCancel color='#fffffe' size='1.4rem' />}
					/>
				))}
			</section>
		</section>
	)
}

export default Todolist
