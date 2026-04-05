import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <div className="w-full bg-white">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
