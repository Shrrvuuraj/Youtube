import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Container } from 'react-bootstrap'
import HomeScreen from './screen/HomeScreen'

const App = () => {
  return (
    <>
     <Header/>

     <div className='app__container border border-info'>
      <Sidebar/>
      <Container fluid className='app__main border border-warning'>
        <HomeScreen />
      </Container>
     </div>
    </>
  )
}

export default App
