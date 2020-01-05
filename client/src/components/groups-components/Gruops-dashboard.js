import React, {Component} from 'react'
import GroupServices from '../../services/group.services'
import GruopCard from './Gruop-card'

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
      <div className="container">
      {this.state.groups.map(elm => <GruopCard key={elm._id} elm={elm} />)}
      </div>
    )
  }
}

export default GroupsDashborad