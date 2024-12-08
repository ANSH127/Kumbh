
import './App.css'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Packages from './pages/Packages'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>
    </Router>
  )
}

export default App
