import React,{Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import AuthServices from './services/auth.services'

import AppNavbar from './components/layouts/AppNavbar'
import HomePage from './components/layouts/HomePage'
import Login from './components/auth-components/Login'
import NewGroup from './components/groups-components/NewGroup'
import GroupsDashboard from './components/groups-components/Gruops-dashboard'
import VolunteersDashboard from './components/volunteer-components/Volunteers-dashboard'
import NewVolunteer from './components/volunteer-components/NewVolunteer'

class App extends Component {
  constructor() {
    super()
    this.state = { loggedInUser: null }
    this.authServices = new AuthServices()
  }

  setTheUser = user => this.setState({ loggedInUser: user })


  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this.authServices.loggedin()
        .then(response => this.setState({ loggedInUser: response }))
        .catch(x => this.setState({ loggedInUser: false }))
    }
  }

  render() {

    this.fetchUser()

    if(this.state.loggedInUser && this.state.loggedInUser.data.rol === 'ADMIN') {
      return (
        <>
          <AppNavbar user={this.state.loggedInUser} setUser={this.setTheUser}/>

          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/login" exact render={match => <Login {...match}  setUser={this.setTheUser} />}></Route>
            <Route path="/nuevo-grupo" exact component={NewGroup}></Route>
            <Route path="/grupos" exact render={match => <GroupsDashboard {...match} user={this.state.loggedInUser} />}></Route>
            <Route path="/voluntarios" exact render={match => <VolunteersDashboard {...match} user={this.state.loggedInUser} />}></Route>
            <Route path="/altas-voluntarios" exact component={NewVolunteer}></Route>
          </Switch>

        </>
      )
    }

    if (this.state.loggedInUser && this.state.loggedInUser.data.rol !== 'ADMIN') {
      return (
        <>
          <AppNavbar user={this.state.loggedInUser} setUser={this.setTheUser}/>

          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/login" exact render={match => <Login {...match}  setUser={this.setTheUser} />}></Route>
          </Switch>

        </>
      )
    }

    return (
      <>
        <AppNavbar user={this.state.loggedInUser} setUser={this.setTheUser}/>

        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/login" exact render={match => <Login {...match}  setUser={this.setTheUser} />}></Route>
        </Switch>

      </>
    )
  }
}

export default App
