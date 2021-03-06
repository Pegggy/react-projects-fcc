import React,{Component} from 'react'
import './app.css'
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
      <div className="MarkdownPreviewer">
        <div className="left">
          <h1> Input </h1>
          <textarea value={this.state.value} onChange={this.handleChange.bind(this)}/>
        </div>
        <div className="right" >
          <h1> Output </h1>
          <div className="content" dangerouslySetInnerHTML={this.getMarked(this.state.value)}></div>
        </div>
      </div>
    )
  }
}
export default Input