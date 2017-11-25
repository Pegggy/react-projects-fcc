import React,{Component} from 'react'
import './app.css'
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
  fetchUser(url){
    fetch(url)
      .then(res => res.json())
      .then(users => this.setState({users}))
  }
  render(){
    let users = this.state.users.map((user,index) =>
      <Item {...user} id={index+1}/>)
    return(
      <div className="table-wrap">
        <table className="table">
          <caption>Leaderboard</caption>
          <tr>
            <th className="number"> # </th>
            <th> Camper Name </th>
            <th className="points" onClick={this.fetchUser.bind(this,RECENTURL)}> Points in past 30 days </th>
            <th className="points" onClick={this.fetchUser.bind(this,ALLTIMEURL)}> All time points </th>
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
        <td className="number">{this.props.id}</td>
        <td className="user">
          <a href={`https://www.freecodecamp.com/${this.props.username}`} target="_blank">
            <img src={`${this.props.img}`} className="avator"/>
            {this.props.username}
          </a>
        </td>
        <td className="points">{this.props.recent}</td>
        <td className="points">{this.props.alltime}</td>
      </tr>
    )
  }
}
export default Leaderboard