
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Students from './Components/Routing/Students';
import StudentsDetails from './Components/Routing/StudentDetails';
import About from './Components/Routing/About';
import Error from './Components/Routing/Error';
import Header from './Components/Routing/Header';


function App() {
  return (
    <div >
      
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='' element={<Students/>}/>
      <Route path='/students' element={<Students/>}/>
      <Route path='/students/:id' element={<StudentsDetails/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
