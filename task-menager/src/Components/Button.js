
const Button = ({text,colors,onClick}) => {
  return (
    <button 
        style={{padding:"2px 4px"}}
        className={colors}
        onClick={onClick}
    >
        {text}
    </button>
  )
}

export default Button