import React,{Component} from 'react'
import AuthServices from '../../services/auth.services'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

class AppNavbar extends Component {
  constructor() {
    super()
    this.authServices = new AuthServices()

  }


  logout = () => {
    this.authServices.logout()
      .then(x => this.props.setUser(null))
      .catch(err => console.log(err))
  }

  render() {
  
    if(this.props.user && this.props.user.data.rol === 'ADMIN') {
      return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img width="10%" src="images/logo_AIC_ESP_2019.jpg" alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Voluntarios" id="basic-nav-dropdown">
              <NavDropdown.Item href="/altas-voluntarios">Alta voluntarios</NavDropdown.Item>
              <NavDropdown.Item href="/voluntarios">Ver voluntarios</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Grupos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/nuevo-grupo">Crear grupo</NavDropdown.Item>
              <NavDropdown.Item href="/grupos">Ver grupos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/logout" onClick={this.logout}>Cerrar sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      )
    }
    if (this.props.user && this.props.user.data.rol !== 'ADMIN') {
      return(
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">
          <img width="5%" src="images/logo_AIC_ESP_2019.jpg" alt="logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/logout" onClick={this.logout}>Cerrar sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
        <img width="5%" src="images/logo_AIC_ESP_2019.jpg" alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/login">Accede</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

}

export default AppNavbar