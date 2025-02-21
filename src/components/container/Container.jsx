import React from 'react'

function Container({
    children,
    ...props
}) {
  return (
    <div className='w-full mx-auto p-3 flex mt-20'>{children}</div>
  )
}

export default Container