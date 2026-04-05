import { motion } from 'framer-motion'
import { ShieldCheck, CheckCircle, Shield, Star } from 'lucide-react'
import useSEO from '../hooks/useSEO'
import ProblemSection from '../components/ProblemSection'
import GuideSection from '../components/GuideSection'
import PlanSection from '../components/PlanSection'
import CallToActionSection from '../components/CallToActionSection'
import StakesSection from '../components/StakesSection'
import BookCallSection from '../components/BookCallSection'

const trustBadges = [
  { icon: CheckCircle, label: 'Placed in 14 Days', sub: 'or we keep searching' },
  { icon: Shield, label: 'Guaranteed to Stay', sub: "or you don't pay" },
  { icon: Star, label: 'Truck-Ready Standard', sub: 'Solo calls from day one' },
]

export default function HomePage() {
  useSEO(
    'Truck-Ready Techs, Placed in 14 Days',
    'ReadyCrew Trades Placement finds, screens, and places skilled service techs who show up, run calls solo from day one, and stay — or you don\'t pay.'
  )

  return (
    <>
      {/* ICP Callout Bar */}
      <div className="w-full bg-[#C2410C] py-2.5 text-center px-4">
        <p className="text-white text-xs sm:text-sm font-semibold tracking-widest uppercase">
          For Trades Shop Owners Who Can't Find Skilled Techs That Actually Last
        </p>
      </div>

      {/* Hero */}
      <section className="w-full min-h-[80vh] flex flex-col justify-center items-center py-16 sm:py-20 px-4 sm:px-6">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#111827] tracking-tight leading-none mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
          >
            Your Next <span className="text-[#C2410C]">Truck-Ready</span> Tech.
            <br />
            Placed In 14 Days.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#6B7280] leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
            We find, screen, and place skilled service techs who show up, run calls solo from day one, and stay — or you don't pay.
          </p>

          <div>
            <motion.a
              href="https://meta.readycrewstaffing.com/lander"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-[#C2410C] text-white rounded-full px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-semibold hover:bg-[#9A3412] shadow-lg cursor-pointer no-underline"
            >
              Yes — Get Me a Truck-Ready Tech
            </motion.a>

            <div className="flex items-center justify-center gap-1.5 mt-3">
              <ShieldCheck size={14} className="text-[#C2410C]" />
              <span className="text-sm text-[#6B7280]">Free 20-minute call. No commitment.</span>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center mt-10 sm:mt-12 pt-10 sm:pt-12 border-t border-[#E5E7EB]">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex flex-col items-center gap-1">
                <badge.icon size={20} className="text-[#C2410C] mb-1" />
                <span className="text-sm text-[#111827] font-semibold">{badge.label}</span>
                <span className="text-xs text-[#6B7280]">{badge.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* StoryBrand Sections */}
      <ProblemSection />
      <GuideSection />
      <PlanSection />
      <CallToActionSection />
      <StakesSection />
      <BookCallSection />
    </>
  )
}
