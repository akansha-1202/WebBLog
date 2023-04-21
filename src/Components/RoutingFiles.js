import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Home from './Home'
import Bollywood from './Bollywood'
import Hollywood from './Hollywood'
import Technology from './Technology'
import Food from './Food'
import Fitness from './Fitness'
import Error from './Error'
import { ContextAPI } from './ContextAPI';
import DetailDescription from './DetailDescription'

function RoutingFiles() {
  return (
    <>
    <ContextAPI>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/bollywood' element={<Bollywood/>}/>
          <Route path='/hollywood' element={<Hollywood/>}/>
          <Route path='/technology' element={<Technology/>}/>
          <Route path='/food' element={<Food/>}/>
          <Route path='/fitness' element={<Fitness/>}/>
          <Route path='/detailDescription/:id' element={<DetailDescription/>}/>
          <Route path='/*' element={<Error/>}/>
       </Routes>
       </ContextAPI>
    </>
  )
}

export default RoutingFiles