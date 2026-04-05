import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, Wrench, Heart } from 'lucide-react'
import useSEO from '../hooks/useSEO'

const values = [
  {
    icon: Target,
    title: 'Laser Focus',
    desc: 'We only do one thing — place skilled service techs in trades businesses. No generalist staffing. No distractions.',
  },
  {
    icon: Users,
    title: 'Shop-Owner Mindset',
    desc: "We think like owners because we've worked alongside them. Every decision we make is about keeping your trucks running and your customers happy.",
  },
  {
    icon: Wrench,
    title: 'Truck-Ready Standard',
    desc: "Every candidate we place can run solo calls from day one. Certified, experienced, and vetted — that's the baseline, not the exception.",
  },
  {
    icon: Heart,
    title: 'Skin in the Game',
    desc: "If the tech doesn't stay, you don't pay. We stand behind every placement because our success depends on yours.",
  },
]

export default function AboutPage() {
  useSEO(
    'About Us',
    'ReadyCrew Trades Placement was built for the trades industry. We place skilled service techs who are certified, experienced, and ready to run solo calls from day one.'
  )

  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: '-50px' })
  const valuesRef = useRef(null)
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' })
  const storyRef = useRef(null)
  const storyInView = useInView(storyRef, { once: true, margin: '-100px' })

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="w-full bg-[#111827] py-16 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="w-full max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-widest uppercase text-[#C2410C] font-semibold mb-4"
          >
            ABOUT READYCREW
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
          >
            Built for the <span className="text-[#C2410C]">Trades.</span>
            <br />
            Nothing Else.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto"
          >
            ReadyCrew exists because trades shop owners deserve a staffing partner who actually understands their world — not a generic recruiting firm that treats every role the same.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section ref={storyRef} className="w-full bg-white py-16 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={storyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-widest uppercase text-[#C2410C] font-semibold mb-4">
              OUR STORY
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-[#111827] leading-tight mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
            >
              We saw the problem firsthand.
            </h2>
            <p className="text-base text-[#6B7280] leading-relaxed mb-4">
              Every trades shop owner we talked to had the same story: trucks sitting idle, calls going unbooked, and an endless cycle of hiring people who didn't work out. The job boards weren't delivering. The recruiting agencies didn't understand the industry.
            </p>
            <p className="text-base text-[#6B7280] leading-relaxed mb-4">
              So we built ReadyCrew — a staffing company that does one thing and does it well: find skilled service technicians who are ready to work from day one.
            </p>
            <p className="text-base text-[#6B7280] leading-relaxed">
              We use targeted sourcing through Meta ads — not job boards full of unqualified applicants. Every candidate goes through our truck-ready vetting process before you ever see their name. And if they don't stay, you don't pay. Period.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={storyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl bg-[#F9FAFB] border border-[#E5E7EB] p-8 md:p-10"
          >
            <div className="flex flex-col gap-8">
              <div>
                <span
                  className="text-4xl sm:text-5xl text-[#C2410C]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
                >
                  14 Days
                </span>
                <p className="text-sm text-[#111827] font-semibold mt-2">Average time to placement</p>
                <p className="text-xs text-[#6B7280] mt-1">From first call to first day on the job</p>
              </div>
              <div className="w-full h-px bg-[#E5E7EB]" />
              <div>
                <span
                  className="text-4xl sm:text-5xl text-[#C2410C]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
                >
                  100%
                </span>
                <p className="text-sm text-[#111827] font-semibold mt-2">Truck-ready guarantee</p>
                <p className="text-xs text-[#6B7280] mt-1">Every tech can run solo calls from day one</p>
              </div>
              <div className="w-full h-px bg-[#E5E7EB]" />
              <div>
                <span
                  className="text-4xl sm:text-5xl text-[#C2410C]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
                >
                  $0
                </span>
                <p className="text-sm text-[#111827] font-semibold mt-2">If they don't stay</p>
                <p className="text-xs text-[#6B7280] mt-1">Our guarantee — no risk to you</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="w-full bg-[#F9FAFB] py-16 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="w-full max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-widest uppercase text-[#C2410C] font-semibold mb-4 text-center"
          >
            WHAT DRIVES US
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl text-[#111827] mb-12 sm:mb-16 leading-tight text-center"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
          >
            Our values aren't on a poster.
            <br />
            <span className="text-[#C2410C]">They're in every placement.</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB]"
              >
                <value.icon size={28} className="text-[#C2410C] mb-4" />
                <h3
                  className="text-xl sm:text-2xl text-[#111827] mb-3"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
                >
                  {value.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
