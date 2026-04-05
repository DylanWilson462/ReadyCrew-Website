import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { XCircle, CheckCircle, Minus, Check } from 'lucide-react'

const failureItems = [
  'More weeks of posting jobs and sorting through applicants who aren\'t qualified',
  'Another hire who seemed good but couldn\'t run a truck solo',
  'Customers rescheduled, revenue missed, reputation at risk',
  'You doing two jobs — running the business and constantly replacing people',
  'The cycle starts over. Again.',
]

const successItems = [
  'A truck-ready tech on your roster inside 14 days',
  'Someone who shows up, runs calls solo, and earns their place',
  'Your trucks running. Your customers kept. Your revenue protected.',
  'A hiring process you can repeat every time you need to grow',
  'The freedom to run your business instead of your recruiting pipeline',
]

export default function StakesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="w-full bg-white py-16 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="w-full max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-widest uppercase text-[#C2410C] font-semibold mb-4 text-center"
        >
          THE CHOICE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl text-[#111827] mb-10 sm:mb-16 text-center"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
        >
          Two paths. One decision.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Failure path */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 bg-[#F9FAFB] border border-[#E5E7EB]"
          >
            <div className="flex items-center gap-3">
              <XCircle size={24} className="text-[#6B7280] opacity-50 shrink-0" />
              <span
                className="text-xl sm:text-2xl text-[#111827]/50"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
              >
                If nothing changes
              </span>
            </div>
            <div className="w-full h-px bg-[#E5E7EB] my-6" />
            <div className="flex flex-col gap-4">
              {failureItems.map((item) => (
                <div key={item} className="flex gap-3">
                  <Minus size={16} className="text-[#6B7280] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#6B7280] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Success path */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 bg-[#C2410C]/5 border border-[#C2410C]/20"
          >
            <div className="flex items-center gap-3">
              <CheckCircle size={24} className="text-[#C2410C] shrink-0" />
              <span
                className="text-xl sm:text-2xl text-[#111827]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
              >
                With ReadyCrew
              </span>
            </div>
            <div className="w-full h-px bg-[#C2410C]/15 my-6" />
            <div className="flex flex-col gap-4">
              {successItems.map((item) => (
                <div key={item} className="flex gap-3">
                  <Check size={16} className="text-[#C2410C] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#111827]/70 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10 sm:mt-16"
        >
          <motion.a
            href="https://meta.readycrewstaffing.com/lander"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-[#C2410C] text-white rounded-full px-8 sm:px-10 py-3.5 sm:py-4 font-bold text-sm sm:text-base hover:bg-[#9A3412] transition-colors cursor-pointer no-underline"
          >
            Book Your Free Call Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
