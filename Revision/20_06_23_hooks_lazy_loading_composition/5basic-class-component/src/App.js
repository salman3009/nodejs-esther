import React from 'react';

class Sub extends React.Component{
  
  constructor(props){
    super(props);
  }
  render(){
    return (<div>
      Hello Sub - {this.props.getDisplay}
    </div>)
  }
}




class App extends React.Component{

  constructor(props){
    super(props)
    this.state={fullName:'akash'}
  }
  
  render(){
    return (<div>
      Hello Newton school - {this.state.fullName}
      <input type="text" onChange={(event)=>this.setState({fullName:event.target.value})}/>
      <Sub getDisplay={'working'}/>
    </div>)
  }
}



export default App;