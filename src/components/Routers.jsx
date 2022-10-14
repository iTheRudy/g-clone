import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

//Components
import Results from './Results'
// import Search from './Search'

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route exact path='/' element= {<Navigate to='/search'/>}></Route>
            <Route exact path='/search' element={<Results />}/>
            <Route exact path='/image' element={<Results />}/>
            <Route exact path='/news' element={<Results />}/>
            <Route exact path='/video' element={<Results />}/>
        </Routes>
    </div>
  )
}

export default Routers