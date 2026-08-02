import React from 'react'
import { useSelector } from 'react-redux'

const ThemeProvider = ({children}) => {
    const {theme} = useSelector((state) => state.theme);
  return (
    <div  className={theme}>
      <div className="w-full  bg-purple-100 text-gray-700  dark:bg-gray-900 dark:text-white ">
        {children}
      </div>
    </div>
  )
}

export default ThemeProvider
