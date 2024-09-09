import React from 'react'

const MainWrapper = ({
    children,
    CustomClass
}) => {
  return (
    <div className={`bg-white min-h-[50vh]  flex flex-col items-center justify-center py-16 px-16 ${CustomClass}`}>
        {children}
    </div>
  )
}

export default MainWrapper