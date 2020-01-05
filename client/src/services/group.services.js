import axios from 'axios'

export default class GroupServices {
  constructor() {

      this.service = axios.create({
        baseURL: `${process.env.REACT_APP_URL}`,
        withCredentials: true
      })
  }


  addGroup = (group) => this.service.post('group/new', group)
  getGroups = () => this.service.get('group/list')
  editNotes = ({notas, _id}) => this.service.post(`group/edit-notes`, ({notas, _id}))
  
}  