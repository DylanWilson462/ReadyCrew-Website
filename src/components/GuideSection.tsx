import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle } from 'lucide-react'

const proofPoints = [
  'Every candidate is screened against our truck-ready standard before you ever meet them.',
  'We source using Meta ads — not job boards full of unqualified applicants.',
  'We only present candidates we\'d hire ourselves.',
  "If they don't stay, you don't pay. No exceptions.",
]

const stats = [
  { number: '14 Days', label: 'Average placement', desc: "From your first call to your new tech's first day" },
  { number: '100%', label: 'Truck-ready standard', desc: 'Every candidate certified, experienced, and vetted' },
  { number: '0', label: "Extra cost if they leave", desc: "We guarantee they stay or you don't pay" },
]

export default function GuideSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="w-full bg-[#111827] py-16 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-widest uppercase text-[#C2410C] font-semibold mb-4">
            WHY READYCREW
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
          >
            We know what a real trade tech looks like.
          </h2>
          <p className="text-base text-white/70 leading-relaxed mb-6">
            We've seen what happens when a shop can't find the right tech — trucks sit idle, calls get rescheduled, and good customers start calling someone else. That's not a staffing problem. That's a business problem.
          </p>
          <p className="text-base text-white/70 leading-relaxed mb-8">
            ReadyCrew was built specifically for service trade businesses. We don't place office workers, warehouse staff, or generalist laborers. We place one kind of person: skilled service techs who are certified, experienced, and capable of running solo calls from day one. That's all we do.
          </p>
          <div className="flex flex-col gap-3">
            {proofPoints.map((point) => (
              <div key={point} className="flex gap-3 items-start">
                <CheckCircle size={16} className="text-[#C2410C] mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">{point}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl bg-[#C2410C]/10 border border-[#C2410C]/30 p-6 sm:p-8 md:p-10"
        >
          <p
            className="text-xl sm:text-2xl md:text-3xl text-white leading-snug mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
          >
            "The right tech exists. You just haven't had the right system to find them."
          </p>
          <div className="w-full h-px bg-white/10" />
          <div className="flex flex-col gap-6 mt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <span
                  className="text-3xl sm:text-4xl text-[#C2410C]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
                >
                  {stat.number}
                </span>
                <p className="text-sm text-white font-semibold mt-1">{stat.label}</p>
                <p className="text-xs text-white/50 mt-1">{stat.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
