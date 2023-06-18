import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import { increment,decrement,amount } from './counterSlice';

function App() {
    
  //const value = useSelector((state)=>state.counter.value);
  const {value,email} = useSelector((state)=>state.counter);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1>{value}-{email}</h1>
       <h1>Hello Redux</h1>
        <br/>
        <button onClick={()=>dispatch(increment())}>Increment</button>
    </div>
  );
}

export default App;
