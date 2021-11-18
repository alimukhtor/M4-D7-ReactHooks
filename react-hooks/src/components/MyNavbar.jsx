import {Navbar, Nav} from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'


const MyNavbar =()=> {
  const location = useLocation()
  return(
  <Navbar className="my-nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home"> StriveBooks</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
      <Link to="/home">
        <div  className={'nav-link' + (location.pathname === '/home' ? ' active' : '')}>Home</div>
      </Link>
        <Nav.Link >About</Nav.Link>
        <Nav.Link >Browse</Nav.Link>
        <Link to="/register">
          <div  className={'nav-link' + (location.pathname === '/register' ? ' active' : '')}>Sign up</div>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)


}

export default MyNavbar
