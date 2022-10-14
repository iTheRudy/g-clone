import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    { url: '/search', text: '🔎 All' },
    { url: '/news', text: '📰 News' },
    { url: '/image', text: '📷 Images' },
    { url: '/video', text: '📽 Videos' }
]


const Links = () => {
    return (
        <div className='mt-4 mb-2 '>
            {links.map(({ url, text }) => (
                <NavLink to={url}
                    className={({ isActive }) =>
                        isActive ? 'text-green-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2.5 m-4':'m-4'
                        } >
                    {text}
                </NavLink>
            ))}
        </div>
    )
}

export default Links