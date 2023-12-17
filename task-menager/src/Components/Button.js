import React from 'react'

const Button = ({text,colors,onClick}) => {
  return (
    <button 
        style={{padding : "0.5rem 1rem", fontWeight: "600"}}
        className = {colors} 
        onClick={onClick}
    >
        {text}
    </button>
  )
}

export default Button