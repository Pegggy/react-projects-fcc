import React,{Component} from 'react'

const RECENTURL = 'http://fcctop100.herokuapp.com/api/fccusers/top/recent'
const ALLTIMEURL = 'http://fcctop100.herokuapp.com/api/fccusers/top/alltime'

class Leaderboard extends Component{
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }
  componentDidMount(){
    fetch('http://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(res => res.json())
      .then(users => this.setState({users}))
  }
  render(){
    let users = this.state.users.map((user,index) =>
      <Item {...user} id={index+1}/>)
    return(
      <div>
        <table>
          <caption>Leaderboard</caption>
          <tr>
            <th> Number </th>
            <th> Camper Name </th>
            <th> Points in past 30 days </th>
            <th> All time points </th>
          </tr>
          <tbody>
             {users} 
          </tbody>
        </table>
      </div>
    )
  }
}
class Item extends Component{
  render(){
    return(
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.username}</td>
        <td>{this.props.recent}</td>
        <td>{this.props.alltime}</td>
      </tr>
    )
  }
}
export default Leaderboard