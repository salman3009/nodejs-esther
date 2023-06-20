import React from 'react';
import EnhancedComponent from './EnhancedComponent';

class App extends React.Component{

  constructor(props){
    super(props);
  }
  
  render(){
    const {address} = this.props;
    return <div>{address}</div>
  }
}

export default EnhancedComponent(App);
