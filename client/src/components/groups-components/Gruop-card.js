import React, {Component} from 'react'
import '../../styles/gruop-card.css'
import Modal from 'react-bootstrap/Modal'
import EditNotes from './Edit-notes'

class GruopCard extends Component {
  constructor() {
    super()
    this.state= {
      showModal: false,
      notas: ''
    }
  }
  
  componentDidMount() {
    this.setState({notas: this.props.elm.notas})
  }


  handleModalOpen = (e) => this.setState({ showModal: true })
  handleModalClose = (e) => {
    this.setState({ showModal: false })
    window.location.reload()
  }


  render() {
    return (
      <>
        <article className="group-card">
          <header className="row">
            <div className="col-6">
              <p><span>grupo: </span>{this.props.elm.nombre}</p>
              <p><span>delegación: </span>{this.props.elm.delegacion}</p>
              <p><span>diócesis: </span>{this.props.elm.diocesis}</p>
              <p><span>provincia: </span>{this.props.elm.provincia}</p>
              <p><span>parroquia: </span>{this.props.elm.parroquia}</p>
              <p><span>domicilio social: </span>{this.props.elm.domicilio_social}</p>
              <p><span>poblacion: </span>{this.props.elm.poblacion}</p>
            </div>
            <div className="col-6">
              <p><span>fecha patente de erección: </span>{this.props.elm.ereccion}</p>
              <p><span>registro núm.: </span>{this.props.elm.n_registro}</p>
              <p><span>notas: </span>{this.props.elm.notas}</p>
              <div>
                <button onClick={this.handleModalOpen} className="btn btn-warning">Editar notas</button>
              </div>
            </div>
          </header>
          
        </article>

        <Modal centered size="lg" show={this.state.showModal} onHide={this.handleModalClose}>
          <Modal.Body>
            <EditNotes notas={this.props.elm.notas} _id={this.props.elm._id} edit={this.edit} />
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-primary" onClick={this.handleModalClose}>Cerrar</button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }

}

export default GruopCard