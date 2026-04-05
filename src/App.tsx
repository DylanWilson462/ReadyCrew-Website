import { motion } from 'framer-motion'
import { ShieldCheck, CheckCircle, Shield, Star } from 'lucide-react'
import ProblemSection from './components/ProblemSection'
import GuideSection from './components/GuideSection'
import PlanSection from './components/PlanSection'
import CallToActionSection from './components/CallToActionSection'
import StakesSection from './components/StakesSection'
import BookCallSection from './components/BookCallSection'
import Footer from './components/Footer'

const trustBadges = [
  { icon: CheckCircle, label: 'Placed in 14 Days', sub: 'or we keep searching' },
  { icon: Shield, label: 'Guaranteed to Stay', sub: "or you don't pay" },
  { icon: Star, label: 'Truck-Ready Standard', sub: 'Solo calls from day one' },
]

function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white border-b border-[#E5E7EB] px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span
            className="text-xl text-[#111827]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
          >
            ReadyCrew<span className="text-[#C2410C]">.</span>
          </span>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#C2410C] text-white rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-[#9A3412] transition-colors cursor-pointer"
          >
            Book a Placement Strategy Call
          </motion.button>
        </div>
      </nav>

      {/* ICP Callout Bar */}
      <div className="bg-[#C2410C] py-2.5 text-center">
        <p className="text-white text-sm font-semibold tracking-widest uppercase">
          For Trades Shop Owners Who Can't Find Skilled Techs That Actually Last
        </p>
      </div>

      {/* Hero */}
      <section className="flex-1 flex flex-col justify-center max-w-4xl mx-auto text-center px-6 pt-16 pb-20">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl text-[#111827] tracking-tight leading-none mb-6"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
        >
          Your Next <span className="text-[#C2410C]">Truck-Ready</span> Tech.
          <br />
          Placed In 14 Days.
        </h1>

        <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed max-w-2xl mx-auto mb-10">
          We find, screen, and place skilled service techs who show up, run calls solo from day one, and stay — or you don't pay.
        </p>

        <div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#C2410C] text-white rounded-full px-10 py-4 text-base font-semibold hover:bg-[#9A3412] shadow-lg cursor-pointer"
          >
            Yes — Get Me a Truck-Ready Tech
          </motion.button>

          <div className="flex items-center justify-center gap-1.5 mt-3">
            <ShieldCheck size={14} className="text-[#C2410C]" />
            <span className="text-sm text-[#6B7280]">Free 20-minute call. No commitment.</span>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center mt-12 pt-12 border-t border-[#E5E7EB]">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex flex-col items-center gap-1">
              <badge.icon size={20} className="text-[#C2410C] mb-1" />
              <span className="text-sm text-[#111827] font-semibold">{badge.label}</span>
              <span className="text-xs text-[#6B7280]">{badge.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* StoryBrand Sections */}
      <ProblemSection />
      <GuideSection />
      <PlanSection />
      <CallToActionSection />
      <StakesSection />
      <BookCallSection />
      <Footer />
    </div>
  )
}

export default App
