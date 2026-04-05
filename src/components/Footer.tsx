import { Link } from 'react-router-dom'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/hiring', label: 'Hiring' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#E5E7EB] py-6 sm:py-8 px-4 sm:px-6">
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link
          to="/"
          className="text-base text-[#111827] no-underline"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
        >
          ReadyCrew Staffing<span className="text-[#C2410C]">.</span>
        </Link>
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-xs sm:text-sm text-[#6B7280] hover:text-[#111827] transition-colors no-underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <span className="text-xs sm:text-sm text-[#6B7280]">
          &copy; 2025 ReadyCrew Staffing. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
