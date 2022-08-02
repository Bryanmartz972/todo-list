const Button = ({ children, color, text, onClick }) => {
	return (
		<button onClick={onClick}
			className={`${color} flex items-center justify-center z-20 p-1.5 rounded-sm hover:${color} hover:brightness-90`}>
			<div className='flex items-center flex-row'>
				{text && <span className='text-background font-bold mr-2'>{text}</span>}
				{children}
			</div>
		</button>
	)
}

export default Button
