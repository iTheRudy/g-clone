import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import {HiX} from 'react-icons/hi'
import { useResultContext } from '../contexts/ResultContextProvider'
import Links from './Links'


const Search = () => {
  const [text, setText] = useState('React JS');
  const { setSearchTerm } = useResultContext();
  
  return (
    <>
      <div className='inline-block relative sm:ml-48 md:ml-72 md:-mt-12 mt-3'>
        <div className='flex'>
        <span className='flex justify-between items-center ml-5 sm:w-96 w-80 h-10 dark:bg-gray-400 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'>
          <input type="text"
            value={text}
            // className='ml-5 sm:w-96 w-80 h-10 dark:bg-gray-400 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'
            className=" bg-gray-100 dark:bg-gray-400 outline-0 w-full mr-1"

            placeholder='Search'
            onChange={(e) => {
              setText(e.target.value)
            }
            }
            onKeyPress={(e) => { e.key === 'Enter' && setSearchTerm(text) }}
          />
          {
            text && (
              <button type='button'
                onClick={() => { setText('') }} >
                <HiX/>
              </button>
            )
          }
        </span>
        <button onClick={() => {
          if(text!=="")
          setSearchTerm(text)
        }} className="pl-3" ><FaSearch />
        </button></div>
        
      <Links />
      </div>
        
    </>
  )
}

export default Search