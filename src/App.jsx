import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import './styles/Global.css'

function App() {

  return (
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
  )
}

export default App