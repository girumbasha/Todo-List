import React from 'react'
import Navbar from './components/Heading/Navbar'
import { Route,Router,Routes } from 'react-router-dom'
import About from './components/Heading/About'
import Blog from './components/Heading/Blog'
import Shop from './components/Heading/Shop'
import Contact from './components/Heading/Contact'
import Home from './components/Body/Home'
import Page from './components/Heading/Page'

function App() {
  return (
    <div className='App'>
      <Navbar/>
  <Routes>
   <Route path='/'element ={<Home/>}/>
   <Route path= 'about'element={<About/>}/>
   <Route path='page'element={<Page/>}/>
   <Route path ='shop'element={<Shop/>}/>
   <Route path='contact'element={<Contact/>}/>
    <Route path='blog'element={<Blog/>}/>

  </Routes>
    </div>
  )
}

export default App
