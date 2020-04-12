import React, {Component} from 'react'
import '../../styles/dashboard.css'
import UsersServices from '../../services/users.services'
import UserCard from './User-card'

class UsersDashborad extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
    }
    this.usersServices = new UsersServices()
  }

  componentDidMount() {
    this.usersServices.getUsers()
    .then(response => {
      const users = response.data
      this.setState({users}) })
  }


  render() {
    return(
      <main className="container">
        <section className="row justify-content-around">
          {this.state.users.map(elm => <UserCard key={elm._id} elm={elm}/>)}
        </section>
      </main>
    )
  }
}

export default UsersDashborad