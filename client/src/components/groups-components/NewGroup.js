import React, { Component } from 'react'
import GroupServices from '../../services/group.services'

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
      notas: ''
    }
    this.groupServices = new GroupServices()
  }

  handleInputChange = e => {
    const {name, value} = e.target
    this.setState({[name] : value})
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const {nombre, delegacion, diocesis, provincia, parroquia, domicilio_social, poblacion, ereccion, n_registro, notas} = this.state
    this.groupServices.addGroup({nombre, delegacion, diocesis, provincia, parroquia, domicilio_social, poblacion, ereccion, n_registro, notas})
  }
  

  render() {

    return (
      <div className="container">
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
          </div>

          <div className="col-5">
            <div className="form-group">
              <label htmlFor="domicilio_social">Domicilio Social</label>
              <input type="text" className="form-control" id="domiclio_social" name="domicilio_social" 
              value={this.state.domiclio_social} onChange={this.handleInputChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="ereccion">Fecha patente de erección</label>
              <input type="text" className="form-control" id="ereccion" name="ereccion" 
              value={this.state.ereccion} onChange={this.handleInputChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="n_registro">Registro núm</label>
              <input type="text" className="form-control" id="n_registrto" name="n_registro" 
              value={this.state.quantity} onChange={this.handleInputChange}></input>
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