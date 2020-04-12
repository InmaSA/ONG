import axios from 'axios'

export default class UsersServices {
  constructor() {

      this.service = axios.create({
        baseURL: `${process.env.REACT_APP_URL}`,
        withCredentials: true
      })
  }


  addUser = (user) => this.service.post('users/new', user)
  getUsers = () => this.service.get('users/list')
  deleteUser = (_id) => this.service.get(`users/delete/${_id}`)
 
}  