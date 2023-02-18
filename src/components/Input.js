import React from 'react'

function Input({ type, width,placeholder }) {
  return (
    <input
      className={`bg-[#fcfcfc] ${width} rounded-sm focus:outline-none focus:shadow-outline placeholder-[#718096] p-3 text-[16px]`}
      placeholder={placeholder}
      type={type}
    />
  )
}

export default Input
