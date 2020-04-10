import React, { Component } from 'react'
import GroupServices from '../../services/group.services'

class EditGroup extends Component {
  constructor() {
    super()
    this.state = {
      _id: '',
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
      telefonoConsiliario: ''
    }
    this.groupServices = new GroupServices()
  }

  componentDidMount() {
    this.setState({
      _id: this.props.group._id ,
      nombre: this.props.group.nombre ,
      delegacion: this.props.group.delegacion ,
      diocesis: this.props.group.diocesis ,
      provincia: this.props.group.provincia ,
      parroquia: this.props.group.parroquia ,
      domicilio_social: this.props.group.domicilio_social,
      poblacion: this.props.group.poblacion ,
      ereccion: this.props.group.ereccion ,
      n_registro: this.props.group.n_registro ,
      cc: this.props.group.cc ,
      notas: this.props.group.notas ,
      nombreConsiliario: this.props.group.nombreConsiliario ,
      emailConsiliario: this.props.group.emailConsiliario ,
      direccionConsiliario: this.props.group.direccionConsiliario ,
      telefonoConsiliario: this.props.group.telefonoConsiliario
    })
  }

  handleInputChange = e => {
    const {name, value} = e.target
    this.setState({[name] : value})
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const {_id, nombre, delegacion, diocesis, provincia, parroquia, domicilio_social, poblacion, ereccion, n_registro, notas, cc, 
      nombreConsiliario, emailConsiliario, direccionConsiliario, telefonoConsiliario} = this.state

    this.groupServices.editGroup({_id, nombre, delegacion, diocesis, provincia, parroquia, domicilio_social, poblacion, ereccion, 
      n_registro, notas, cc, nombreConsiliario, emailConsiliario, direccionConsiliario, telefonoConsiliario})
      
    .then(response => {
      this.setState({
        nombre: response.data.nombre ,
        delegacion: response.data.delegacion ,
        diocesis: response.data.diocesis ,
        provincia: response.data.provincia ,
        parroquia: response.data.parroquia ,
        domicilio_social: response.data.domicilio_social ,
        poblacion: response.data.poblacion ,
        ereccion: response.data.ereccion ,
        n_registro: response.data.n_registro ,
        cc: response.data.cc ,
        notas: response.data.notas ,
        nombreConsiliario: response.data.nombreConsiliario ,
        emailConsiliario: response.data.emailConsiliario ,
        direccionConsiliario: response.data.direccionConsiliario ,
        telefonoConsiliario: response.data.telefonoConsiliario
      })
    })
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
          </div>

          <div className="col-5">
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

            <button type="submit" className="btn btn-warning">Editar</button>
          </div>
        </form>
      </div>
    )
  }  
}


export default EditGroup