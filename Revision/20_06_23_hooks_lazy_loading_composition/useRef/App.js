import {useEffect,useRef} from 'react';
function App() {

  const inputRef = useRef(null);

  
   useEffect(()=>{
    console.log(inputRef.current.name);
    console.log(inputRef.current.id);
    inputRef.current.value="akash";
    inputRef.current.focus();
    inputRef.current.disabled = true;
   },[])

  return (
    <div className="App">
      <input type='text' name="fullName" id="name" ref={inputRef}/>
    </div>
  );
}

export default App;
