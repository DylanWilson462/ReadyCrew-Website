import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/hiring', label: 'Hiring' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="w-full bg-white border-b border-[#E5E7EB]">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-8 py-4">
        <Link
          to="/"
          className="text-xl text-[#111827] no-underline"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
        >
          ReadyCrew<span className="text-[#C2410C]">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-semibold no-underline transition-colors ${
                location.pathname === link.to
                  ? 'text-[#C2410C]'
                  : 'text-[#6B7280] hover:text-[#111827]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/contact"
              className="bg-[#C2410C] text-white rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-[#9A3412] transition-colors no-underline"
            >
              Book a Call
            </Link>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#111827] cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-white px-6 pb-4">
          <div className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-semibold no-underline py-2 ${
                  location.pathname === link.to
                    ? 'text-[#C2410C]'
                    : 'text-[#6B7280]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-[#C2410C] text-white rounded-full px-6 py-2.5 text-sm font-semibold text-center hover:bg-[#9A3412] transition-colors no-underline mt-1"
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
