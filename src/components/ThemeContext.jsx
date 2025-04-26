import React from 'react'
import {useEffect, createContext, useState, useContext} from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkmode] = useState(() => {
        // Load the initial state from the local storage or default to false
        const storedTheme = localStorage.getItem('darkMode');
        return storedTheme ? JSON.parse(storedTheme) : false;
    })

    const toggleTheme = () => {
        setDarkmode(prev => {
            const newTheme = !prev
            localStorage.setItem('darkMode', JSON.stringify(newTheme))
            return newTheme
        })
    }

    useEffect(() => {
        // Ensure class is added at initial render
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return (
        <ThemeContext.Provider value={{darkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)