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
        <Link to="/" className="no-underline">
          <img src="/logo.png" alt="ReadyCrew Trades Placement" className="h-8 sm:h-10 w-auto" />
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
          &copy; 2025 ReadyCrew Trades Placement. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
