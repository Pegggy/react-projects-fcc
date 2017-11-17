import React,{Component} from 'react'

class Input extends Component{
  constructor(props){
   super(props)
    this.state = {
      value: ''
    }
  }
  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }
  render(){
    return(
      <div>
        <textarea value={this.state.value} onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}
export default Input