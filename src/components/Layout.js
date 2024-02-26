import React from 'react'

const Layout = ({children,className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark px-5 lg:px-24 py-4 ${className}`}>
        {children}
    </div>
  )
}

export default Layout