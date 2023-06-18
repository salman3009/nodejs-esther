import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import { increment,decrement,amount } from './counterSlice';

function App() {
    
  //const value = useSelector((state)=>state.counter.value);
  const {value,email} = useSelector((state)=>state.counter);
  const dispatch = useDispatch();

  const onChangeHandler=(event)=>{
    dispatch(amount(event.target.value));
  }


  return (
    <div className="App">
      <h1>{value}-{email}</h1>
       <h1>Hello Redux</h1>
        <br/>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <br/>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <br/>
        <input type="text" onChange={onChangeHandler}/>
    </div>
  );
}

export default App;
