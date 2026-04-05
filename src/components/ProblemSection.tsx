import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AlertCircle, HeartCrack, Scale } from 'lucide-react'

const cards = [
  {
    icon: AlertCircle,
    title: 'The External Problem',
    body: "You can't find techs who are actually qualified, available, and willing to show up and do the work.",
  },
  {
    icon: HeartCrack,
    title: 'The Internal Problem',
    body: "You've wasted thousands on bad hires. You're exhausted from the cycle. You're starting to wonder if the right people even exist.",
  },
  {
    icon: Scale,
    title: 'The Deeper Problem',
    body: "You built something real. Your business shouldn't be held hostage by a broken hiring system that was never designed for the trades.",
  },
]

export default function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-[#F9FAFB] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-widest uppercase text-[#C2410C] font-semibold mb-4"
        >
          THE PROBLEM
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl text-[#111827] mb-6 leading-tight"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
        >
          You've tried everything. The problem keeps coming back.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-base md:text-lg text-[#6B7280] max-w-2xl mb-16 leading-relaxed"
        >
          Indeed gives you 200 unqualified applicants. Staffing agencies send you whoever is available. The tech you finally hired quit after 6 weeks. Meanwhile your trucks aren't running and your customers are waiting.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 border border-[#E5E7EB]"
            >
              <card.icon size={28} className="text-[#C2410C] mb-4" />
              <h3
                className="text-xl text-[#111827] mb-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
              >
                {card.title}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
