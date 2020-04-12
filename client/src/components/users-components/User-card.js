import React, {Component} from 'react'

import UsersServices from '../../services/users.services'
import '../../styles/card.css'


class UserCard extends Component {
  constructor() {
    super()
    this.state= {
      showModal: false
    }
    this.usersServices = new UsersServices()
  }
  
  handleModalOpen = (e) => this.setState({ showModal: true })
  handleModalClose = (e) => {
    this.setState({ showModal: false })
    window.location.reload()
  }

  delete = (e) => {
    this.usersServices.deleteUser(e.target.id)
    window.location.reload()
  }

  render() {
console.log(this.props)
    return (
      <article className="col-5 card">
        <p><span>Usuario: </span>{this.props.elm.username}</p>
        <p><span>Rol: </span>{this.props.elm.rol}</p>
        <p><span>delegación, diócesis o grupo: </span>{this.props.elm.name}</p>
        <div>
          <button id={this.props.elm._id} onClick={this.delete} className="btn btn-danger">Eliminar</button>
        </div>
      </article>
    )
  }
}

export default UserCard