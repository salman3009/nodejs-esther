// import Product from "./Product";
// import Artist from "./Artist";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {lazy,Suspense} from 'react';
const Product = lazy(()=>import('./Product'));
const Artist = lazy(()=>import('./Artist'));
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Suspense fallback={<h1>Still loading.....</h1>}>
      <Routes>
          <Route path='/product' element={<Product/>}/>
          <Route path='/artist' element={<Artist/>}/>
        </Routes>
      </Suspense>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
