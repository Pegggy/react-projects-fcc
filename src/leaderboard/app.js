import React,{Component} from 'react'

class Leaderboard extends Component{
  constructor(props){
    super(props)
  }
  render(){
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
        </table>
      </div>
    )
  }
}
export default Leaderboard