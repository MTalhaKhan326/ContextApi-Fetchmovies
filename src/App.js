import Home from './Home';
import Context from './pra'
import SingleMovie from './SingleMovie';
import Error from './Error';
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="movie/:id" element={<SingleMovie/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
