import React, {Component} from 'react'
import VolunteerServices from '../../services/volunteer.services'
import '../../styles/card.css'
import Modal from 'react-bootstrap/Modal'
import EditGroup from './Edit-group'

class GruopCard extends Component {
  constructor() {
    super()
    this.state= {
      showModal: false,
      volunteers: []
    }
    this.volunteerServices = new VolunteerServices()
  }
  
  componentDidMount() {
    this.findVolunteersInAGroup(this.props.elm.nombre)
  }

  findVolunteersInAGroup(grupo) {
    this.volunteerServices.getVolunteersInAGroup(grupo)
    .then(response => this.setState({volunteers: response.data}))
  }



  handleModalOpen = (e) => this.setState({ showModal: true })
  handleModalClose = (e) => {
    this.setState({ showModal: false })
    window.location.reload()
  }


  render() {

    if(this.props.rol === 'ADMIN') {
      return (
        <>
          <article className="card">
            <header className="row">
              <div className="col-6">
                <p><span>grupo: </span>{this.props.elm.nombre}</p>
                <p><span>delegación: </span>{this.props.elm.delegacion}</p>
                <p><span>diócesis: </span>{this.props.elm.diocesis}</p>
                <p><span>provincia: </span>{this.props.elm.provincia}</p>
                <p><span>parroquia: </span>{this.props.elm.parroquia}</p>
                <p><span>domicilio social: </span>{this.props.elm.domicilio_social}</p>
                <p><span>poblacion: </span>{this.props.elm.poblacion}</p>
                <p><span>fecha patente de erección: </span>{this.props.elm.ereccion}</p>
                <p><span>registro núm.: </span>{this.props.elm.n_registro}</p>
                <p><span>c.c.: </span>{this.props.elm.cc}</p>
              </div>
              <div className="col-6">
                <div className="border consiliario">
                <p><span>Consiliario/a:</span></p>
                  <p>Nombre: {this.props.elm.nombreConsiliario}</p>
                  <p>Email: {this.props.elm.emailConsiliario}</p>
                  <p>Teléfono: {this.props.elm.telefonoConsiliario}</p>
                  <p>Dirección: {this.props.elm.direccionConsiliario}</p>
                </div>
                <div className="row">
                   <p className="col-2"><span>notas: </span></p>
                   <div className="col-9 border">
                    <p>{this.props.elm.notas}</p>
                   </div>
                </div>
                
                <div className="margin-top">
                  <button onClick={this.handleModalOpen} className="btn btn-warning">Editar grupo</button>
                </div>
              </div>
            </header>
  
            <hr></hr>
            <p><span>Voluntarios de este grupo:</span></p>
              {
                this.state.volunteers.map((elm, idx) => {
                  return (
                    <article className="row" key={idx}>
                      <p className="col-2">{elm.nombre}</p> 
                      <p className="col-2">{elm.cargo}</p> 
                      <p className="col-2">{elm.telefono}</p>
                      <p className="col-2">{elm.email}</p>
                      <p className="col-2">{elm.direccion}</p>
                    </article>  
                  )
                })
              }
                       
          </article>
  
          <Modal centered size="lg" show={this.state.showModal} onHide={this.handleModalClose}>
            <Modal.Body>
              <EditGroup group={this.props.elm} />
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-primary" onClick={this.handleModalClose}>Cerrar</button>
            </Modal.Footer>
          </Modal>
        </>
      )
    }

    return (
      <>
        <article className="card">
            <header className="row">
              <div className="col-6">
                <p><span>grupo: </span>{this.props.elm.nombre}</p>
                <p><span>delegación: </span>{this.props.elm.delegacion}</p>
                <p><span>diócesis: </span>{this.props.elm.diocesis}</p>
                <p><span>provincia: </span>{this.props.elm.provincia}</p>
                <p><span>parroquia: </span>{this.props.elm.parroquia}</p>
                <p><span>domicilio social: </span>{this.props.elm.domicilio_social}</p>
                <p><span>poblacion: </span>{this.props.elm.poblacion}</p>
                <p><span>fecha patente de erección: </span>{this.props.elm.ereccion}</p>
                <p><span>registro núm.: </span>{this.props.elm.n_registro}</p>
                <p><span>c.c.: </span>{this.props.elm.cc}</p>
              </div>
              <div className="col-6">
                <div className="border consiliario">
                <p><span>Consiliario/a:</span></p>
                  <p>Nombre: {this.props.elm.nombreConsiliario}</p>
                  <p>Email: {this.props.elm.emailConsiliario}</p>
                  <p>Teléfono: {this.props.elm.telefonoConsiliario}</p>
                  <p>Dirección: {this.props.elm.direccionConsiliario}</p>
                </div>
                <div className="row">
                   <p className="col-2"><span>notas: </span></p>
                   <div className="col-9 border">
                    <p>{this.props.elm.notas}</p>
                   </div>
                </div>
              </div>
            </header>
  
            <hr></hr>
            <p><span>Voluntarios de este grupo:</span></p>
              {
                this.state.volunteers.map((elm, idx) => {
                  return (
                    <article className="row" key={idx}>
                      <p className="col-2">{elm.nombre}</p> 
                      <p className="col-2">{elm.cargo}</p> 
                      <p className="col-2">{elm.telefono}</p>
                      <p className="col-2">{elm.email}</p>
                      <p className="col-2">{elm.direccion}</p>
                    </article>  
                  )
                })
              }
                       
          </article>
      </>
    )
  }

}

export default GruopCard