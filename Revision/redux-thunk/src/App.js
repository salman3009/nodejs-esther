import './App.css';
import { useDispatch, useSelector} from 'react-redux'
import { increment,decrement,incrementByAmount,fetchDetails } from './counterSlice';
import { useEffect } from 'react';

function App() {

  const email = useSelector((state)=>state.counter.email);
  const value = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(fetchDetails());
  },[])
  return (
    <div className="App">
      <h1>{email}</h1>
      <h1>{value}</h1>
      <button onClick={()=>dispatch(increment({value:2,email:"suresh@gmail.com"}))}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <button onClick={()=>dispatch(incrementByAmount(20))}>Default value</button>
    </div>
  );
}

export default App;
