import React, { Component } from 'react'
import VolunteerServices from '../../services/volunteer.services'
import {Toast} from 'react-bootstrap'

class NewVolunteer extends Component {
  constructor() {
    super()
    this.state = {
      cargo: '',
      delegacion: '',
      diocesis: '',
      grupo: '',
      nombre: '',
      dni: '',
      fecha_nacimiento: '',
      direccion: '',
      cp: '',
      telefono: '',
      email: '',
      revista: false,
      showToast: false
    }
    this.volunteerServices = new VolunteerServices()
  }

  handleInputChange = e => {
    const name = e.target.name
    const value = (name === 'revista') ? e.target.checked : e.target.value
    this.setState({[name] : value})
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const {cargo, delegacion, diocesis, grupo, nombre, dni, fecha_nacimiento, direccion, cp, telefono, email, revista} = this.state
    this.volunteerServices.addVolunteer({cargo, delegacion, diocesis, grupo, nombre, dni, fecha_nacimiento, direccion, cp, telefono, email, revista})
    this.handleToastOpen()
  }
  
  handleToastOpen = () => this.setState({ showToast: true })
  handleToastClose = () => this.setState(
    {showToast: false, 
      cargo: '',
      delegacion: '',
      diocesis: '',
      grupo: '',
      nombre: '',
      dni: '',
      fecha_nacimiento: '',
      direccion: '',
      cp: '',
      telefono: '',
      email: '',
      revista: false })

  render() {

    return (
      <div className="container">
        <Toast onClose={this.handleToastClose} show={this.state.showToast} delay={4000} autohide style={{ position: 'fixed', bottom: 350, right: 450, zIndex: 9999 }}>
          <Toast.Header>
              <strong className="mr-auto">Aviso:</strong>
          </Toast.Header>
          <Toast.Body>Voluntario/a añadido correctamente a la base de datos</Toast.Body>
        </Toast>

        <form className="row justify-content-around" onSubmit={this.handleFormSubmit}>
          <div className="col-5">
            <div className="form-group">
              <label htmlFor="cargo">Cargo</label>
              <input type="text" className="form-control" id="cargo" name="cargo" 
              value={this.state.cargo} onChange={this.handleInputChange}></input>
              <small>Elegir entre: delegada, diocesana, presidenta de grupo y voluntario/a</small>
            </div>
            <div className="form-group">
              <label htmlFor="delegacion">Delegación</label>
              <input type="text" className="form-control" id="delegacion" name="delegacion" 
              value={this.state.delegacion} onChange={this.handleInputChange}></input>
              <small>El nombre de una delegación debe ser escrito igual para todos sus integrantes y corresponder al definido en el "grupo" creado.</small>
            </div>
            <div className="form-group">
              <label htmlFor="diocesis">Diócesis</label>
              <input type="text" className="form-control" id="diocesis" name="diocesis" 
              value={this.state.diocesis} onChange={this.handleInputChange}></input>
              <small>El nombre de una diócesis debe ser escrito igual para todos sus integrantes y corresponder al definido en el "grupo" creado.</small>
            </div>
            <div className="form-group">
              <label htmlFor="grupo">Grupo</label>
              <input type="text" className="form-control" id="grupo" name="grupo" 
              value={this.state.grupo} onChange={this.handleInputChange}></input>
              <small>El nombre de un grupo debe ser escrito igual para todos sus integrantes y corresponder con el indicado en el "grupo" creado.</small>
            </div>
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo:</label>
              <input type="text" className="form-control" id="nombre" name="nombre" 
              value={this.state.nombre} onChange={this.handleInputChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="dni">D.N.I.</label>
              <input type="text" className="form-control" id="dni" name="dni" 
              value={this.state.dni} onChange={this.handleInputChange}></input>
            </div>
          </div>

          <div className="col-5">
            <div className="form-group">
              <label htmlFor="fecha_nacimiento">Fecha de nacimiento (DD/MM/AAAA)</label>
              <input type="text" className="form-control" id="fecha_nacimiento" name="fecha_nacimiento" 
              value={this.state.fecha_nacimiento} onChange={this.handleInputChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="direccion">Dirección</label>
              <input type="text" className="form-control" id="direccion" name="direccion" 
              value={this.state.direccion} onChange={this.handleInputChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="cp">C.P.</label>
              <input type="text" className="form-control" id="cp" name="cp" 
              value={this.state.cp} onChange={this.handleInputChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input type="text" className="form-control" id="telefono" name="telefono" 
              value={this.state.telefono} onChange={this.handleInputChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" id="email" name="email" 
              value={this.state.email} onChange={this.handleInputChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="revista">Revista</label>
              <input type="checkbox" id="revista" name="revista" 
              checked={this.state.revista} onChange={this.handleInputChange}></input>
            </div>

            <button type="submit" className="btn btn-primary">Añadir</button>
          </div>
        </form>
      </div>
    )
  }  
}


export default NewVolunteer