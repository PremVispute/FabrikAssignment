import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar} from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <>
      <div className='sideBar text-center'>
          <LinkContainer to="/">
            <Navbar.Brand>Fabrik</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/login">
            <Navbar.Brand>Login</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/register">
            <Navbar.Brand>Register</Navbar.Brand>
          </LinkContainer>
      </div>
      <div className="header text-center">            
          <h2>Community</h2>
          <h4>Ideas of the open world</h4>            
      </div>
    </>
  )
}

export default HomeScreen