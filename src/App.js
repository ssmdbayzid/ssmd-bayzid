import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Page/Share/Header';
import Home from './Page/Home/Home';
import Project from './Page/Project/Project';

function App() {
  return (
    <div className="App container">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/project/:id' element={<Project></Project>}></Route>
      </Routes>
    </div>
  );
}

export default App;
