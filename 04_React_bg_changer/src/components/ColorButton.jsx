import React from 'react'

function ColorButton({color,text,onClick}) {
  return (
    <button 
    onClick={onClick}
            className="outline-none px-4 py-2 shadow-lg rounded-full font-bold text-white" 
            style={{
              backgroundColor:color
          }}>
            {text}
    </button>
  )
}

export default ColorButton 