import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Students from './pages/Students';
import Navbar from './components/Navbar';
import Chatbot from './pages/Chatbot';
import LandingPage from './pages/LandingPage.tsx';
import StudentView from './pages/StudentView';
function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/students' element={<Students/>}/>
          <Route path='/student/:id' element={<StudentView/>}/>
          <Route path='/chatbot' element={<Chatbot/>}/>
        </Routes>
    </Router>
  );
}

export default App;
