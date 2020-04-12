import React, { Component } from 'react'
import {Toast} from 'react-bootstrap'
import UsersServices from '../../services/users.services'
import '../../styles/card.css'

class NewUser extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      rol: '',
      name: '',
      password: '',
      showToast: false
    }
    this.usersServices = new UsersServices()
  }

  handleInputChange = e => {
    const {name, value} = e.target
    this.setState({[name] : value})
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const {username, rol, name, password} = this.state
    this.usersServices.addUser({username, rol, name, password})
    this.handleToastOpen()
  }
  
  handleToastOpen = () => this.setState({ showToast: true })
  handleToastClose = () => this.setState(
    {username: '',
    rol: '',
    name: '',
    password: '',
    showToast: false })

  render() {

    return (
      <div className="container">
       <Toast onClose={this.handleToastClose} show={this.state.showToast} delay={4000} autohide style={{ position: 'fixed', bottom: 500, right: 600, zIndex: 9999 }}>
          <Toast.Header>
              <strong className="mr-auto">Aviso:</strong>
          </Toast.Header>
          <Toast.Body>Usuario creado correctamente.</Toast.Body>
        </Toast>
        
        <form className="row justify-content-around" onSubmit={this.handleFormSubmit}>
          <div className="col-5">
            <div className="form-group">
              <label htmlFor="username">Nombre del usuario</label>
              <input type="text" className="form-control" id="username" name="username" 
              value={this.state.username} onChange={this.handleInputChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="rol">Rol para el acceso a la aplicación</label>
              <select className="form-control" id="rol" name="rol" selected={this.state.rol} onChange={this.handleInputChange}>
                <option value="DELEGADA">Delegada</option>
                <option value="DIOCESANA">Diocesana</option>
                <option value="GRUPO">Presidenta de Grupo</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="name">Nombre de la delegación, Diócesis o Grupo</label>
              <input type="text" className="form-control" id="name" name="name" 
              value={this.state.name} onChange={this.handleInputChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" className="form-control" id="password" name="password" 
              value={this.state.password} onChange={this.handleInputChange}></input>
            </div>
            <button type="submit" className="btn btn-primary">Añadir</button>   
          </div>      
        </form>
      </div>
    )
  }  
}


export default NewUser