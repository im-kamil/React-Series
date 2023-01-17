import React, { Component } from 'react'

 class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'kamil'
      }
    }
    componentDidMount(){
        setInterval (()=>{
            this.setState({
                name : 'kamil'
            })
        } ,2000)
    }
    
  render() {
    return (
      <div>
        Parent Component
        <memoComp name={this.state.name} />
        {/* <regComp name={this.state.name}/>
        <purecomp name={this.state.name}/> */}
     </div>
    )
  }
}

export default ParentComp