import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Form from './Components/Form';
import Questions from './Components/Questions';
import Table from './Components/Table';
import Navbar from './Components/Navbar';


function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/quiz' element={<Questions/>}/>
        <Route path='/result' element={<Table/>}/>
      </Routes>
      {/* <Form/> */}
      {/* <Questions/> */}
    </div>
  );
}

export default App;
