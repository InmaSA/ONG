import React, { Component } from 'react'
import GroupServices from '../../services/group.services'

class EditNotes extends Component {
  constructor() {
    super()
    this.state = {
      notas: ''
    }
    this.groupServices = new GroupServices()
  }

  componentDidMount() {
    this.setState({notas: this.props.notas})
  }

  handleInputChange = e => {
    const {name, value} = e.target
    this.setState({[name] : value})
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const {notas} = this.state
    const _id = this.props._id
    this.groupServices.editNotes({notas,_id})
    .then(response => {
      this.setState({notas: response.data.notas})
    })
  }
  


  render() {

    return (
      <div className="container">
        <form className="row justify-content-around" onSubmit={this.handleFormSubmit}>
          <div className="col-5">
            <div className="form-group">
              <label htmlFor="notas">Notas</label>
              <textarea type="text" className="form-control" id="notas" name="notas" 
              rows="6" value={this.state.notas} onChange={this.handleInputChange}></textarea>
            </div>
            <button type="submit" className="btn btn-warning">Cambiar</button>
          </div>
        </form>
      </div>
    )
  }  
}


export default EditNotes