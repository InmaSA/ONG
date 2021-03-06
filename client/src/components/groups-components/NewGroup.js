import React, { Component } from 'react'
import {Toast} from 'react-bootstrap'
import GroupServices from '../../services/group.services'
import '../../styles/card.css'

class NewGroup extends Component {
  constructor() {
    super()
    this.state = {
      nombre: '',
      delegacion: '',
      diocesis: '',
      provincia: '',
      parroquia: '',
      domicilio_social: '',
      poblacion: '',
      ereccion: '',
      n_registro: '',
      cc: '',
      notas: '',
      nombreConsiliario: '',
      emailConsiliario: '',
      direccionConsiliario: '',
      telefonoConsiliario: '',
      showToast: false
    }
    this.groupServices = new GroupServices()
  }

  handleInputChange = e => {
    const {name, value} = e.target
    this.setState({[name] : value})
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const {nombre, delegacion, diocesis, provincia, parroquia, domicilio_social, poblacion, ereccion, n_registro, notas, cc, nombreConsiliario, emailConsiliario, direccionConsiliario, telefonoConsiliario} = this.state
    this.groupServices.addGroup({nombre, delegacion, diocesis, provincia, parroquia, domicilio_social, poblacion, ereccion, n_registro, notas, cc, nombreConsiliario, emailConsiliario, direccionConsiliario, telefonoConsiliario})
    this.handleToastOpen()
  }
  
  handleToastOpen = () => this.setState({ showToast: true })
  handleToastClose = () => this.setState(
    {nombre: '',
    delegacion: '',
    diocesis: '',
    provincia: '',
    parroquia: '',
    domicilio_social: '',
    poblacion: '',
    ereccion: '',
    n_registro: '',
    cc: '',
    notas: '',
    nombreConsiliario: '',
    emailConsiliario: '',
    direccionConsiliario: '',
    telefonoConsiliario: '',
    showToast: false })

  render() {

    return (
      <div className="container">
       <Toast onClose={this.handleToastClose} show={this.state.showToast} delay={4000} autohide style={{ position: 'fixed', bottom: 100, right: 600, zIndex: 9999 }}>
          <Toast.Header>
              <strong className="mr-auto">Aviso:</strong>
          </Toast.Header>
          <Toast.Body>Grupo creado correctamente.</Toast.Body>
        </Toast>
        
        <form className="row justify-content-around" onSubmit={this.handleFormSubmit}>
          <div className="col-5">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" className="form-control" id="nombre" name="nombre" 
              value={this.state.nombre} onChange={this.handleInputChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="delegacion">Delegación</label>
              <input type="text" className="form-control" id="delegacion" name="delegacion" 
              value={this.state.delegacion} onChange={this.handleInputChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="diocesis">Diócesis</label>
              <input type="text" className="form-control" id="diocesis" name="diocesis" 
              value={this.state.diocesis} onChange={this.handleInputChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="poblacion">Población</label>
              <input type="text" className="form-control" id="poblacion" name="poblacion" 
              value={this.state.poblacion} onChange={this.handleInputChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="provincia">Provincia</label>
              <input type="text" className="form-control" id="provincia" name="provincia" 
              value={this.state.provincia} onChange={this.handleInputChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="parroquia">Parroquia</label>
              <input type="text" className="form-control" id="parroquia" name="parroquia" 
              value={this.state.parroquia} onChange={this.handleInputChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="domicilio_social">Domicilio Social</label>
              <input type="text" className="form-control" id="domicilio_social" name="domicilio_social" 
              value={this.state.domicilio_social} onChange={this.handleInputChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="ereccion">Fecha patente de erección</label>
              <input type="text" className="form-control" id="ereccion" name="ereccion" 
              value={this.state.ereccion} onChange={this.handleInputChange}></input>
            </div>
          </div>

          <div className="col-5">
            <div className="form-group">
              <label htmlFor="n_registro">Registro núm</label>
              <input type="text" className="form-control" id="n_registro" name="n_registro" 
              value={this.state.n_registro} onChange={this.handleInputChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="cc">C.C.</label>
              <input type="text" className="form-control" id="cc" name="cc" 
              value={this.state.cc} onChange={this.handleInputChange}></input>
            </div>
            <div className="border consiliario">
              <p>Consiliario/a:</p>
              <div className="form-group">
                <label htmlFor="consiliario-nombre">Nombre</label>
                <input type="text" className="form-control" id="consiliario-nombre" name="nombreConsiliario" 
                value={this.state.nombreConsiliario} onChange={this.handleInputChange}></input>
              </div>
              <div className="form-group">
                <label htmlFor="consiliario-email">Email</label>
                <input type="text" className="form-control" id="consiliario-email" name="emailConsiliario" 
                value={this.state.emailConsiliario} onChange={this.handleInputChange}></input>
              </div>
              <div className="form-group">
                <label htmlFor="consiliario.direccion">Dirección</label>
                <input type="text" className="form-control" id="consiliario.direccion" name="direccionConsiliario" 
                value={this.state.direccionConsiliario} onChange={this.handleInputChange}></input>
              </div>
              <div className="form-group">
                <label htmlFor="consiliario.telefono">Teléfono</label>
                <input type="text" className="form-control" id="consiliario.telefono" name="telefonoConsiliario" 
                value={this.state.telefonoConsiliario} onChange={this.handleInputChange}></input>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="notas">Notas</label>
              <textarea type="text" className="form-control" id="notas" name="notas" 
              rows="6" value={this.state.notas} onChange={this.handleInputChange}></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Añadir</button>
          </div>
        </form>
      </div>
    )
  }  
}


export default NewGroup