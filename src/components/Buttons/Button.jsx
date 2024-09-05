import React from 'react'

const Button = ({ type,value, onClick ,customClass }) => {
  return (
    <div>
    <button
    type={type}
      onClick={onClick}
      className={`py-3 px-4 bg-[#2B76C1] transition-all duration-300  text-white rounded-lg cursor-pointer w-full hover:opacity-90 ${customClass}`}
    >
      {value}
    </button>
  </div>
  )
}

export default Button