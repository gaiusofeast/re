import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Why from './Why/Why'
import Citi from './Citi/Citi'
import Display from './Display/Display'
import Test from './Tes/Test'
const App = () => {
const [category,setCategory]= useState("All");
  return (
    <div>
    <Navbar/>   
    <Hero/>
    <Why/>
    <Citi category={category} setCategory={setCategory}/>
    <Display category={category} />
    <Test/>
</div>
  )
}

export default App