import axios from 'axios'

export default class VolunteerServices {
  constructor() {

      this.service = axios.create({
        baseURL: `${process.env.REACT_APP_URL}`,
        withCredentials: true
      })
  }


  addVolunteer = (volunteer) => this.service.post('volunteer/new', volunteer)
  getVolunteers = () => this.service.get('volunteer/list')
  editVolunteer = (volunteer) => this.service.post('volunteer/edit', volunteer)

  
}  