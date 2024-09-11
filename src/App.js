import './App.css';
import { Routes, Route } from 'react-router-dom';
import AllCourses from './views/AllCourses';
import EnrolledCourses from './views/EnrolledCourses';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllCourses />} />
        <Route path="/enrolled" element={<EnrolledCourses />} />
      </Routes>
    </div>
  );
}

export default App;
