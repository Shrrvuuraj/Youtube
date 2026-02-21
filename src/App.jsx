import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Container } from 'react-bootstrap'
import HomeScreen from './screen/HomeScreen'
import "./components/stylesheet/App.css"
import LoginScreen from './screen/LoginScreen'



const App = () => {
  const [sideBar, toggleSidebar] = useState(() => {
  return window.innerWidth > 520
})
useEffect(()=>{
  const handleResize=()=>{
    toggleSidebar(window.innerWidth>520)

  }
  window.addEventListener("resize",handleResize)
  return ()=>{
    window.removeEventListener("resize",handleResize)

  }

},[])
  const handleToglleSideBar=()=>{
    toggleSidebar(prev=>!prev)
    // console.log(sideBar)
  }
  return (
    <>
     {/* <Header handleToglleSideBar={handleToglleSideBar}/>

     <div className='app__container border border-info'>
      <Sidebar sideBar={sideBar} handleToglleSideBar={handleToglleSideBar}/>
      <Container fluid className='app__main border border-warning'>
        <HomeScreen />
      </Container>
     </div> */}
     <LoginScreen/>
    </>
  )
}

export default App
