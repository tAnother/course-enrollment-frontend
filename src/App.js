import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
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

function Home() {
  return (
    <>
      <main>
        <h2>Homepage</h2>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  )
}

function About() {
  return (
    <>
      <main>
        <h2>About</h2>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  )
}
export default App;
