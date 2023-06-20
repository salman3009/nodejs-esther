import './App.css';
import Product from './Product';
import Artist from './Artist';

function SplitPanel(props){
    return (<div className="main-pane">
      <div className="main-pane-left">
       {props.left}
      </div>
      <div className="main-pane-right"> 
      {props.right}
      </div>
    </div>) 
}


function App() {
  return (
   <SplitPanel left={<Product/>} right={<Artist/>}/>
  );
}

export default App;
