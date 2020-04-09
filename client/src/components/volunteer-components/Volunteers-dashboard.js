import React, {Component} from 'react'
import '../../styles/dashboard.css'
import VolunteerServices from '../../services/volunteer.services'
import VolunteerCard from './Volunteer-card'

class VolunteersDashborad extends Component {
  constructor() {
    super()
    this.state = {
      volunteers: [],
      volunteersCopy: [],
      delegacion: '',
      diocesis: '',
      grupo: '',
      revista: '',
      fecha_nacimiento: '',
      nombre: ''
    }
    this.volunteerServices = new VolunteerServices()
  }

  componentDidMount() {
    this.volunteerServices.getVolunteers()
    .then(response => {
      const volunteers = response.data
      this.setState({volunteers, volunteersCopy: volunteers}) })
  }

  handleSearchInput = e => {
    const name = e.target.name
    const value = e.target.value
    this.setState({[name] : value})
    switch(e.target.name) {
      case 'delegacion':
        this.search(this.state.delegacion, 'delegacion')
        break
      case 'diocesis':
        this.search(this.state.diocesis, 'diocesis')
        break
      case 'grupo':
        this.search(this.state.grupo, 'grupo')  
        break
      case 'revista':
        this.search(value, 'revista')
        break  
      case 'fecha_nacimiento':
        this.search(this.state.fecha_nacimiento, 'fecha_nacimiento')
        break 
      case 'nombre':
        this.search(this.state.nombre, 'nombre')
        break   
    }
    this.setState({ [e.target.name]: e.target.value })
  }

  search = (word, field) => {
    console.log(word)
    let results = []
      switch(field) {
        case 'delegacion':
          this.state.volunteersCopy.find(elm => {
            if (elm.delegacion.toLowerCase().includes(word.toLowerCase())) 
            results.push(elm) 
          })
          break 
        case 'diocesis':
          this.state.volunteersCopy.find(elm => {
            if (elm.diocesis.toLowerCase().includes(word.toLowerCase())) 
            results.push(elm)
          })
          break  
        case 'grupo':
          this.state.volunteersCopy.find(elm => {
            if (elm.grupo.toLowerCase().includes(word.toLowerCase()))
            results.push(elm)
          })
          break    
        case 'revista':
          if (word === 'SI') {
            this.state.volunteersCopy.find(elm => {
              if (elm.revista === true) 
              results.push(elm) 
            })
          } else {
            this.state.volunteersCopy.find(elm => {
              if (elm.revista === false) 
              results.push(elm) 
            })
          }
          break 
        case 'fecha_nacimiento':
          this.state.volunteersCopy.find(elm => {
            if (elm.fecha_nacimiento.toLowerCase().includes(word.toLowerCase())) 
            results.push(elm)
          })
          break  
        case 'nombre':
          this.state.volunteersCopy.find(elm => {
            if (elm.nombre.toLowerCase().includes(word.toLowerCase()))
            results.push(elm)
          })
          break   
      }  
    this.setState({volunteersCopy: results})
  }

  clearAll = () => window.location.reload(true)

  render() {

    {if (this.props.loggedInUser.data.rol == 'ADMIN') {
      return(
        <main className="container unit-card">
          <section className="search">
            <header>
              <h3>Filtra por campos:</h3>
            </header>
            <div className="form-inline">
              <div className="form-group">
                <label htmlFor="filter-delegacion">Delegación: </label>
                <input className="form-control form-control-sm" type="text" name="delegacion" id="filter-delegacion" value={this.state.delegacion} onChange={this.handleSearchInput}></input>
              </div>
              <div className="form-group">
                <label htmlFor="filter-diocesis">Diócesis: </label>
                <input className="form-control form-control-sm" type="text" name="diocesis" id="filter-diocesis" value={this.state.diocesis} onChange={this.handleSearchInput}></input>
              </div>
              <div className="form-group">
                <label htmlFor="filter-grupo">Grupo: </label>
                <input className="form-control form-control-sm" type="text" name="grupo" id="filter-grupo" value={this.state.grupo} onChange={this.handleSearchInput}></input>
              </div>
            </div>
            <div className="form-inline second-row">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="revista-SI">Revista</label>
                <input className="form-check-input" type="radio" name="revista" id="revista-SI" value='SI' onChange={this.handleSearchInput}></input>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="revista-NO">No</label>
                <input className="form-check-input" type="radio" name="revista" id="revista-NO" value='NO' onChange={this.handleSearchInput}></input>
              </div>
              <div className="form-group">
                <label className="label" htmlFor="filter-fecha_nacimiento">Fecha de nacimiento (DD/MM/AAAA): </label>
                <input className="form-control form-control-sm" type="text" name="fecha_nacimiento" id="filter-fecha_nacimiento" value={this.state.fecha_nacimiento} onChange={this.handleSearchInput}></input>
              </div>
              <div className="form-group">
                <label className="label" htmlFor="filter-grupo">Nombre: </label>
                <input className="form-control form-control-sm" type="text" name="nombre" id="filter-nombre" value={this.state.nombre} onChange={this.handleSearchInput}></input>
              </div>
              <button onClick={this.clearAll} className="btn btn-primary" type="submit">Refrescar las búsquedas</button>
            </div>
          </section>
  
          <section>
            {this.state.volunteersCopy.map(elm => <VolunteerCard key={elm._id} elm={elm} rol={this.props.loggedInUser.data.rol}/>)}
          </section>
        </main>
      )
    }
    if (this.props.loggedInUser.data.rol == 'DELEGADA') {
      return(
        <main className="container unit-card">
          <section className="search">
            <header>
              <h3>Filtra por campos:</h3>
            </header>
            <div className="form-inline">
              <form className="form-group">
                <label htmlFor="filter-diocesis">Diócesis: </label>
                <input className="form-control form-control-sm" type="text" name="diocesis" id="filter-diocesis" value={this.state.diocesis} onChange={this.handleSearchInput}></input>
              </form>
              <div className="form-group">
                <label htmlFor="filter-grupo">Grupo: </label>
                <input className="form-control form-control-sm" type="text" name="grupo" id="filter-grupo" value={this.state.grupo} onChange={this.handleSearchInput}></input>
              </div>
            </div>
            <div className="form-inline second-row">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="revista-SI">Revista</label>
                <input className="form-check-input" type="radio" name="revista" id="revista-SI" value='SI' onChange={this.handleSearchInput}></input>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="revista-NO">No</label>
                <input className="form-check-input" type="radio" name="revista" id="revista-NO" value='NO' onChange={this.handleSearchInput}></input>
              </div>
              <div className="form-group">
                <label className="label" htmlFor="filter-fecha_nacimiento">Fecha de nacimiento (DD/MM/AAAA): </label>
                <input className="form-control form-control-sm" type="text" name="fecha_nacimiento" id="filter-fecha_nacimiento" value={this.state.fecha_nacimiento} onChange={this.handleSearchInput}></input>
              </div>
              <div className="form-group">
                <label className="label" htmlFor="filter-grupo">Nombre: </label>
                <input className="form-control form-control-sm" type="text" name="nombre" id="filter-nombre" value={this.state.nombre} onChange={this.handleSearchInput}></input>
              </div>
              <button onClick={this.clearAll} className="btn btn-primary" type="submit">Refrescar las búsquedas</button>
            </div>
          </section>
  
          <section>
            {this.state.volunteersCopy.map(elm => <VolunteerCard key={elm._id} elm={elm} rol={this.props.loggedInUser.data.rol}/>)}
          </section>
        </main>
      )
    }
    if (this.props.loggedInUser.data.rol == 'DIOCESANA') {
      return(
        <main className="container unit-card">
          <section className="search">
            <header>
              <h3>Filtra por campos:</h3>
            </header>
            <div className="form-inline">
              <div className="form-group">
                <label htmlFor="filter-grupo">Grupo: </label>
                <input className="form-control form-control-sm" type="text" name="grupo" id="filter-grupo" value={this.state.grupo} onChange={this.handleSearchInput}></input>
              </div>
            </div>
            <div className="form-inline second-row">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="revista-SI">Revista</label>
                <input className="form-check-input" type="radio" name="revista" id="revista-SI" value='SI' onChange={this.handleSearchInput}></input>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="revista-NO">No</label>
                <input className="form-check-input" type="radio" name="revista" id="revista-NO" value='NO' onChange={this.handleSearchInput}></input>
              </div>
              <div className="form-group">
                <label className="label" htmlFor="filter-fecha_nacimiento">Fecha de nacimiento (DD/MM/AAAA): </label>
                <input className="form-control form-control-sm" type="text" name="fecha_nacimiento" id="filter-fecha_nacimiento" value={this.state.fecha_nacimiento} onChange={this.handleSearchInput}></input>
              </div>
              <div className="form-group">
                <label className="label" htmlFor="filter-grupo">Nombre: </label>
                <input className="form-control form-control-sm" type="text" name="nombre" id="filter-nombre" value={this.state.nombre} onChange={this.handleSearchInput}></input>
              </div>
              <button onClick={this.clearAll} className="btn btn-primary" type="submit">Refrescar las búsquedas</button>
            </div>
          </section>
  
          <section>
            {this.state.volunteersCopy.map(elm => <VolunteerCard rol={this.props.loggedInUser.data.rol} key={elm._id} elm={elm} rol={this.props.loggedInUser.data.rol}/>)}
          </section>
        </main>
      )
    }
  
    else {
      return(
        <main className="container unit-card">
          <section>
            {this.state.volunteersCopy.map(elm => <VolunteerCard key={elm._id} elm={elm} rol={this.props.loggedInUser.data.rol}/>)}
          </section>
        </main>
      )
    }
  }
    
  }
}

export default VolunteersDashborad