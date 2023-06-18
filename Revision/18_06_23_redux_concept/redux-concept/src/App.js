import { useSelector } from 'react-redux';
import './App.css';


function App() {
    
  //const value = useSelector((state)=>state.counter.value);
  const {value,email} = useSelector((state)=>state.counter);

  return (
    <div className="App">
      <h1>{value}-{email}</h1>
       <h1>Hello Redux</h1>
    </div>
  );
}

export default App;
