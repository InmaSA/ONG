import axios from 'axios'

export default class AuthServices {
  constructor() {

      this.service = axios.create({
        baseURL: `${process.env.REACT_APP_URL}`,
        withCredentials: true
      })
  }

  login = ({username, password}) => this.service.post('login', { username, password })
  logout = () => this.service.post('logout')
  loggedin = () => this.service.get('loggedin')

  
}  