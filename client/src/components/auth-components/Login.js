import React, { Component } from 'react'
import '../../styles/login.css'

import AuthServices from '../../services/auth.services'


class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      error: null,
    }
    this.authServices = new AuthServices()
  }

  handleInputChange = e => {
    const {name, value} = e.target
    this.setState({[name] : value})
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const {username, password} = this.state
    this.authServices.login({username, password})
    .then(theLoggedUser => {
        this.setState({
            username: '',
            password: ''
        })
        this.props.setUser(theLoggedUser)
        this.props.history.push('/')
    })
    .catch(err => {
      console.log(err.response.data.message)
      this.setState({error: err.response.data.message})
    })
  }


  render() {
    return (
      <div className="container login">
        <div className="row justify-content-center">
          <form className="col-4" onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <div>
                <small>{this.state.error}</small>
              </div>
              <label htmlFor="username">Usuario</label>
              <input type="text" className="form-control" id="username" placeholder="p.ej. Madrid-Alcala-1"
              name="username" value={this.state.username} onChange={this.handleInputChange}></input>
              <small>No introducir nombres con tildes</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" className="form-control" id="password" placeholder="Contraseña"
              name="password" value={this.state.password} onChange={this.handleInputChange}></input>
            </div>
            <button type="submit" className="btn btn-primary">Acceder</button>
          </form>
        </div>
    </div>
    )
  }
}




export default Login