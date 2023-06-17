import {useState} from 'react';
// function App(){

//       let fullName = "suresh";

//       const onchangeHandler=(event)=>{
//         fullName = event.target.value;
//         console.log(fullName);
//       }

//       return (
//         <>
//         <div>{fullName}</div>
//         <div><input type="text" onChange={onchangeHandler}/></div>
//         </>
//       )
// }
// export default App;




function App(){

   const [getState,setState]=useState('suresh');

  const onchangeHandler=(event)=>{
    setState(event.target.value)
  }

  return (
    <>
    <div>{getState}</div>
    <div><input type="text" onChange={(event)=>setState(event.target.value)}/></div>
    </>
  )
}
export default App;