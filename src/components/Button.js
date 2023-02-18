import React from 'react'

function Button({ label, width }) {
  return (
    <button
      className={`bg-[#3083CE] ${width} p-4 rounded-md text-white font-medium  hover:shadow-md`}
    >
      {label}
    </button>
  )
}

export default Button
