import React,{Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import AuthServices from './services/auth.services'

import ProtectedRoute from './components/routes/ProtectedRoute'

import AppNavbar from './components/layouts/AppNavbar'
import HomePage from './components/layouts/HomePage'
import Login from './components/auth-components/Login'
import NewGroup from './components/groups-components/NewGroup'
import GroupsDashboard from './components/groups-components/Groups-dashboard'
import VolunteersDashboard from './components/volunteer-components/Volunteers-dashboard'
import NewVolunteer from './components/volunteer-components/NewVolunteer'
import UsersDashboard from './components/users-components/Users-dashboard'
import NewUser from './components/users-components/NewUser'


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
            <ProtectedRoute path='/usuarios' user={this.state.loggedInUser} component={UsersDashboard} />
            <ProtectedRoute path='/nuevo-usuario' user={this.state.loggedInUser} component={NewUser} />
            <ProtectedRoute path='/grupos' user={this.state.loggedInUser} component={GroupsDashboard} />
            <ProtectedRoute path='/nuevo-grupo' user={this.state.loggedInUser} component={NewGroup} />
            <ProtectedRoute path='/voluntarios' user={this.state.loggedInUser} component={VolunteersDashboard} />
            <ProtectedRoute path='/altas-voluntarios' user={this.state.loggedInUser} component={NewVolunteer} />
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
            <ProtectedRoute path='/voluntarios' user={this.state.loggedInUser} component={VolunteersDashboard} />
            <ProtectedRoute path='/grupos' user={this.state.loggedInUser} component={GroupsDashboard} />
          </Switch>

        </>
      )
    }
    else {
      return (
        <>
          <AppNavbar user={this.state.loggedInUser} setUser={this.setTheUser}/>
  
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/login" exact render={match => <Login {...match}  setUser={this.setTheUser} />}></Route>
            {/* <ProtectedRoute path='/usuarios' user={this.state.loggedInUser} component={UsersDashboard} /> */}
            {/* <ProtectedRoute path='/nuevo-grupo' user={this.state.loggedInUser} component={NewGroup} /> */}
            {/* <ProtectedRoute path='/grupos' user={this.state.loggedInUser} component={GroupsDashboard} /> */}
            {/* <ProtectedRoute path='/voluntarios' user={this.state.loggedInUser} component={VolunteersDashboard} /> */}
            {/* <ProtectedRoute path='/altas-voluntarios' user={this.state.loggedInUser} component={NewVolunteer} /> */}
          </Switch>
  
        </>
      )
    }  
  }
}

export default App
