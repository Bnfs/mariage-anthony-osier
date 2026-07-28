import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProgrammePage from './pages/ProgrammePage'
import MenuPage from './pages/MenuPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programme" element={<ProgrammePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </>
  )
}

export default App
