const Button = ({children, color}) => {
  return (
    <button className={`${color} flex items-center justify-center z-20 h-8 w-8 rounded-sm hover:${color} hover:brightness-90`}>{children}</button>
  )
}

export default Button