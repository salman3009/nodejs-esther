import axios from 'axios';
import {useEffect,useState} from 'react';

function App() {

  const [getTodo,setTodo] = useState([]);
  useEffect(()=>{
     axios.get('https://jsonplaceholder.typicode.com/todos/').then((result)=>{
          console.log(result.data);
          setTodo(result.data);
     }).catch((error)=>{
        console.log(error);
     })
  },[])

  return (
    <div className="App">
     {
      getTodo && getTodo.map((obj,index)=>{
           return (<div key={index}>
               {obj.title}
           </div>)
         
      })
     }
     
    </div>
  );
}

export default App;
