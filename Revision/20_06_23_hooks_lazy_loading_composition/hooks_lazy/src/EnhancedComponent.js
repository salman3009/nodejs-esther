import React from 'react';

const EnhancedComponent=(OriginalComponent)=>{

    class NewComponent extends React.Component{
           
        constructor(props){
            super(props);
            this.state = {address:"bangalore"}
        }
        render(){
            return <OriginalComponent address={this.state.address}/>
        }
    }


      return NewComponent;
}

export default EnhancedComponent