import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Container } from 'react-bootstrap'
import HomeScreen from './screen/HomeScreen'
import "./components/stylesheet/App.css"



const App = () => {
  const [sideBar,toggleSidebar]=useState(false)
  const handleToglleSideBar=()=>toggleSidebar(value=>!value)
  return (
    <>
     <Header handleToglleSideBar={handleToglleSideBar}/>

     <div className='app__container border border-info'>
      <Sidebar sideBar={sideBar}/>
      <Container fluid className='app__main border border-warning'>
        <HomeScreen />
      </Container>
     </div>
    </>
  )
}

export default App
