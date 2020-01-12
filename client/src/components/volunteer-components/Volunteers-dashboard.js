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
      grupo: ''
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
    this.setState({ [e.target.name]: e.target.value })
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
    }
    this.setState({ [e.target.name]: e.target.value })
  }


  search = (word, field) => {
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
      }  
    this.setState({volunteersCopy: results})
  }

  clearAll = () => this.setState({volunteersCopy: this.state.volunteers, delegacion:'', diocesis: '', grupo: ''})


  render() {
    // console.log(this.props.user.data)

    return(
      <main className="container unit-card">
        <section>
          <header>
            <h3>Filtra por campos:</h3>
          </header>
          <div className="row">
            <form className="form-inline">
              <label className="label" htmlFor="filter-delegacion">Delegación: </label>
              <input className="form-control form-control-sm" type="text" name="delegacion" id="filter-delegacion" value={this.state.delegacion} onChange={this.handleSearchInput}></input>
            </form>
            <form className="form-inline">
              <label className="label" htmlFor="filter-diocesis">Diócesis: </label>
              <input className="form-control form-control-sm" type="text" name="diocesis" id="filter-diocesis" value={this.state.diocesis} onChange={this.handleSearchInput}></input>
            </form>
            <form className="form-inline">
              <label className="label" htmlFor="filter-grupo">Grupo: </label>
              <input className="form-control form-control-sm" type="text" name="grupo" id="filter-grupo" value={this.state.grupo} onChange={this.handleSearchInput}></input>
            </form>
            <button onClick={this.clearAll} className="submit-btn btn-light" type="submit">Refrescar las búsquedas</button>
          </div>
        </section>

        <section>
          {this.state.volunteersCopy.map(elm => <VolunteerCard key={elm._id} elm={elm}/>)}
        </section>
      </main>
    )
  }
}

export default VolunteersDashborad