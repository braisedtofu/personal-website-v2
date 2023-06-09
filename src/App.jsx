import './App.css'
import './styles/Global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'

function App() {

  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:ProjectId" element={<ProjectDetails />} />
      </Routes>
  )
}

export default App
