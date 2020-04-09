import React, {Component} from 'react'
import '../../styles/dashboard.css'
import GroupServices from '../../services/group.services'
import GroupCard from './Group-card'

class GroupsDashborad extends Component {
  constructor() {
    super()
    this.state = {
      groups: []
    }
    this.groupServices = new GroupServices()
  }

  componentDidMount() {
    this.groupServices.getGroups()
    .then(response => {
      const groups = response.data
      this.setState({groups}) })
  }


  render() {
    return(
      <div className="container unit-card">
      {this.state.groups.map(elm => <GroupCard key={elm._id} elm={elm} rol={this.props.loggedInUser.data.rol}/>)}
      </div>
    )
  }
}

export default GroupsDashborad