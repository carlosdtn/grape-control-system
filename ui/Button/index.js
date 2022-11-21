import React from 'react'

const Button = React.forwardRef(({ children, href }, ref) => {
  return (
    <a href={href} ref={ref}>
      <button className="bg-blue-500 p-1 px-2 rounded-md hover:bg-blue-600 text-white">
        {children}
      </button>
    </a>
  )
})

export default Button
