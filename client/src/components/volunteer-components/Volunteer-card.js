import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import VolunteerServices from '../../services/volunteer.services'
import '../../styles/card.css'
import Modal from 'react-bootstrap/Modal'

import EditVolunteer from './Edit-volunteer'

class VolunteerCard extends Component {
  constructor() {
    super()
    this.state= {
      showModal: false
    }
    this.volunteerServices = new VolunteerServices()
  }
  
  handleModalOpen = (e) => this.setState({ showModal: true })
  handleModalClose = (e) => {
    this.setState({ showModal: false })
    window.location.reload()
  }

  delete = (e) => {
    this.volunteerServices.deleteVolunteer(e.target.id)
    window.location.reload()
  }

  render() {

    return (
      <>
        <article className="card">
          <header className="row">
            <div className="col-6">
              <p><span>cargo: </span>{this.props.elm.cargo}</p>
              <p><span>delegación: </span>{this.props.elm.delegacion}</p>
              <p><span>diócesis: </span>{this.props.elm.diocesis}</p>
              <p><span>grupo: </span>{this.props.elm.grupo}</p>
              <p><span>nombre: </span>{this.props.elm.nombre}</p>
              <p><span>dni: </span>{this.props.elm.dni}</p>
              <p><span>fecha de nacimiento: </span>{this.props.elm.fecha_nacimiento}</p>
            </div>
            <div className="col-6">
              <p><span>dirección: </span>{this.props.elm.direccion}</p>
              <p><span>c.p.: </span>{this.props.elm.cp}</p>
              <p><span>teléfono: </span>{this.props.elm.telefono}</p>
              <p><span>email: </span>{this.props.elm.email}</p>
              <p><span>c.c.: </span>{this.props.elm.cc}</p>
              <label htmlFor="revista"><span>revista: </span></label>
              <input name="revista" id="revista" type="checkbox" readOnly={true} checked={this.props.elm.revista}></input>
              <div>
                <button onClick={this.handleModalOpen} className="btn btn-warning">Editar</button>
                <button id={this.props.elm._id} onClick={this.delete} className="btn btn-danger">Eliminar</button>
              </div>
              
            </div>
          </header>
          
        </article>

        <Modal centered size="lg" show={this.state.showModal} onHide={this.handleModalClose}>
          <Modal.Body>
            <EditVolunteer volunteer={this.props.elm}/>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-primary" onClick={this.handleModalClose}>Cerrar</button>
          </Modal.Footer>
        </Modal>

      </>
    )
  }
}

export default VolunteerCard