import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { PhoneCall, UserCheck, Wrench } from 'lucide-react'

const steps = [
  {
    num: '1',
    label: 'Step One',
    icon: PhoneCall,
    title: 'Book Your Free Placement Strategy Call',
    desc: "Tell us about your shop, your trucks, and the kind of tech you need. In 20 minutes, we'll map out exactly what we'd do for you — no commitment required.",
  },
  {
    num: '2',
    label: 'Step Two',
    icon: UserCheck,
    title: 'We Source, Screen, and Send You the Best',
    desc: 'We run a targeted sourcing campaign, vet every candidate against our truck-ready standard, and send you only the ones who make the cut. No noise. Just qualified people.',
  },
  {
    num: '3',
    label: 'Step Three',
    icon: Wrench,
    title: 'Your Tech Shows Up Ready to Work',
    desc: "Your new hire walks in on day one ready to run solo calls. And if for any reason they don't stay, we guarantee it — you don't pay.",
  },
]

export default function PlanSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="w-full bg-white py-16 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="w-full max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-widest uppercase text-[#C2410C] font-semibold mb-4 text-center md:text-left"
        >
          THE PLAN
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl text-[#111827] mb-4 leading-tight text-center md:text-left"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
        >
          <span className="text-[#C2410C]">Three</span> steps to your next great hire.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-base sm:text-lg text-[#6B7280] mb-12 sm:mb-16 text-center md:text-left"
        >
          No long contracts. No stacks of resumes. No guessing.
        </motion.p>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`flex flex-col sm:flex-row gap-4 sm:gap-8 items-start py-8 sm:py-12 ${
                i < steps.length - 1 ? 'border-b border-[#E5E7EB]' : ''
              }`}
            >
              <span
                className="text-6xl sm:text-8xl text-[#111827] opacity-[0.06] leading-none w-16 sm:w-24 shrink-0 hidden md:block"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
              >
                {step.num}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs tracking-widest uppercase text-[#C2410C] font-semibold mb-2">
                  {step.label}
                </p>
                <h3
                  className="text-xl sm:text-2xl md:text-3xl text-[#111827] mb-3"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
                >
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-lg">
                  {step.desc}
                </p>
              </div>
              <step.icon size={40} className="text-[#C2410C] opacity-20 shrink-0 self-center hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
