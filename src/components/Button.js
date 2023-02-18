import React from 'react'

function Button({ label, width,onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#1876D1] ${width} p-4 rounded-md text-white font-medium  hover:shadow-md`}
    >
      {label}
    </button>
  )
}

export default Button
