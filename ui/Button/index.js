import React from 'react'

const Button = React.forwardRef(({ children, href, isLinked }, ref) => {
  return (
    <>
      {isLinked ? (
        <a href={href} ref={ref}>
          <button className="bg-blue-500 p-1 px-2 rounded-md hover:bg-blue-600 text-white">
            {children}
          </button>
        </a>
      ) : (
        <button className="bg-blue-500 p-1 px-2 rounded-md hover:bg-blue-600 text-white">
          {children}
        </button>
      )}
    </>
  )
})

Button.defaultProps = {
  isLinked: true
}

export default Button
