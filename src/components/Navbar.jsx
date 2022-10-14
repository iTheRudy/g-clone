import React from 'react'
import { Link } from 'react-router-dom'


//components
import Search from './Search'
const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className='border-b dark:border-gray-700 dark:bg-zinc-800' >

            <div className='p-5 pb-2 flex flex-wrap justify-between items-center  '>
                <Link to="/">
                    <p className='text-2xl px-1 py-2 bg-blue-500 text-white font-bold rounded dark:bg-gray-400 dark:text-zinc-800'>
                        G-Clone
                    </p>
                </Link>
                <button type='button' onClick={() => { setDarkTheme(!darkTheme) }}
                className="z-10 dark:bg-white dark:text-gray-900 bg-gray-500 text-white rounded-full px-2 py-1">

                    {darkTheme ? "Light 💡" : "Dark 🌙"}
                </button>
            </div>
            <Search />

        </div>
    )
}

export default Navbar 