
import './App.css'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Packages from './pages/Packages'
import PackagesDetailPage from './pages/PackagesDetailPage'
import EnquiryPage from './pages/EnquiryPage'
import BlogPage from './pages/BlogPage'
import BlogDetailPage from './pages/BlogDetailPage'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:id" element={<PackagesDetailPage />} />
        <Route path="/enquiry" element={<EnquiryPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App
