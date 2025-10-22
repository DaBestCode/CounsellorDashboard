import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Students from './pages/Students';
import Navbar from './components/Navbar';
import Chatbot from './pages/Chatbot';
function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path='/students' element={<Students/>}/>
        </Routes>
    </Router>
  );
}

export default App;
