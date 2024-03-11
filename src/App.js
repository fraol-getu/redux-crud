
import './App.css';
import Home from './component/home';
import Create from './component/create'
import Update from './component/update'
import Read from './component/read'
import Delete from './component/delete'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Router>
    <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/create' element={<Create/>} />
   <Route path='/update' element={<Update />} />
   <Route path='/read' element={<Read />} />
   <Route path='/delete' element={<Delete />} />

    </Routes>
    </Router>
    </div>
  );
}

export default App;
