import Header from './Header';
import './App.css';
import Login from './Login';
import Register from './Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
   <div>
     <Header/>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
