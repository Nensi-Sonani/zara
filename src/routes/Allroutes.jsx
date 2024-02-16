import React from 'react'
import {  Route, Routes } from 'react-router'
import Home from '../pages/Home'
// import Woman from '../pages/Woman'
// import Man from '../pages/Man'
// import Girl from '../pages/Girl'
// import Boy from '../pages/Boy'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/Woman"/>
            <Route path="/Man"/>
            <Route path="/Girl"/>
            <Route path="/Boy"/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes