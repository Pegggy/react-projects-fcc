import React,{Component} from 'react'
let marked = require('marked')

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
  getMarked(value){
    return {__html: marked(this.state.value)}
  }
  render(){
    return(
      <div>
        <div className="left">
          <textarea value={this.state.value} onChange={this.handleChange.bind(this)}/>
        </div>
        <div className="right" dangerouslySetInnerHTML={this.getMarked(this.state.value)}>
          
        </div>
      </div>
    )
  }
}
export default Input