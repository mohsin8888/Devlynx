import React from 'react'

const MainWrapper = ({
  id,
    children,
    CustomClass
}) => {
  return (
    <div 
    id={id}
    className={` abc bg-white min-h-[50vh]  flex flex-col items-center justify-center py-16 px-16 ${CustomClass}`}>
        {children}
    </div>
  )
}

export default MainWrapper