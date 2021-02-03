import './App.css'
import { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import LoginComponent from './components/LoginComponent'
import Register from './components/Register'
import CardList from './components/CardList'
// import { fakeCards, fakeFriendsCards } from './fakeCards'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'// import Button from 'react-bootstrap/Button'

function App () {
  const [username, setUsername] = useState()
  const [token, setToken] = useState()

  function setAuth (username, token) {
    setUsername(username)
    setToken(token)
  }
  const isLoggedIn = (username && token)

  return (
    <Router>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand>Cards with Friends</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Create a Card</Nav.Link>
            <NavDropdown title='Cards' id='basic-nav-dropdown'>
              <NavDropdown.Item>My Cards
                {/* <NavDropdown.Item onClick={() => showCards(1)}>My Liked Cards</NavDropdown.Item>
                <NavDropdown.Item onClick={() => showCards(2)}>My Received Cards</NavDropdown.Item>
                <NavDropdown.Item onClick={() => showCards(3)}>My Sent Cards</NavDropdown.Item> */}
              </NavDropdown.Item>
              <NavDropdown.Item>Friends Cards</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Switch>
            <Route path='/register'>
              <Register isLoggedIn={isLoggedIn} setAuth={setAuth} />
            </Route>
            <Route path='/'>
              {token
                ? <div>Logged in as {username} <button onClick={() => setToken(null)}>Log Out</button></div>
                : <LoginComponent isLoggedIn={isLoggedIn} setAuth={setAuth} />}
            </Route>

          </Switch>

        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path='/'>
          {(!token) && (
            <Jumbotron className='animate__animated animate__fadeInLeft' fluid>
              <Container className='jumbotron-container'>
                <h1 className='splash-title'>Welcome to Card Circle</h1>
                <p>
                  A space where you can share all your greetings with friends.
                </p>
              </Container>
              <Container className='jumbotron-container'>
                <p>Holder space to add carousel of images</p>
              </Container>
            </Jumbotron>
          )}
          {token && (
            <>
              <h3 className='ml-sm-4'>All the Cards</h3>
              <CardList token={token} />
            </>
          )}
        </Route>

      </Switch>
      {/* <Switch>
        <Route path='/card-detail'>
          <>
            <h3 className='ml-sm-4'>Card Detail</h3>
            <CardDetail token={token} id={1} />
          </>
        </Route>
      </Switch> */}
    </Router>
  )
}

export default App
