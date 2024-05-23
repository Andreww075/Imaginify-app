import React from 'react'

const layout = ({children} : { children: React.ReactNode }) => {
  return (
    <div className='auth'>{children}</div>
  )
}

export default layout