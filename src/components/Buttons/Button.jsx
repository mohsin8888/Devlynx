import React from 'react'

const Button = ({ type,value, onClick ,customClass }) => {
  return (
    <div>
    <button
    type={type}
      onClick={onClick}
      className={`py-3 px-4 bg-[#2B76C1] text-white rounded cursor-pointer w-full hover:opacity-90 ${customClass}`}
    >
      {value}
    </button>
  </div>
  )
}

export default Button