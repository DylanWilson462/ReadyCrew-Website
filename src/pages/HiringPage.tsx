import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Briefcase, MapPin, Clock, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const openings = [
  {
    title: 'HVAC Service Technician',
    location: 'Multiple Markets',
    type: 'Full-Time',
    description:
      'We place experienced HVAC service techs with trade shops across the country. If you hold an EPA certification, have hands-on residential or commercial experience, and can run solo service calls — we want to talk to you.',
    requirements: [
      'EPA 608 certification (Universal preferred)',
      '2+ years of hands-on HVAC service experience',
      'Ability to diagnose and repair residential/commercial systems',
      'Clean driving record and valid driver\'s license',
      'Comfortable running solo service calls from day one',
    ],
  },
  {
    title: 'Plumbing Service Technician',
    location: 'Multiple Markets',
    type: 'Full-Time',
    description:
      'We connect skilled plumbers with trade shops that need reliable techs who show up and get it done. If you have experience with residential service and repair work, we have shops looking for someone like you.',
    requirements: [
      'Journeyman plumbing license or equivalent experience',
      '2+ years of residential/commercial plumbing experience',
      'Proficiency with drain cleaning, water heaters, and fixture repair',
      'Clean driving record and valid driver\'s license',
      'Self-motivated and able to work independently',
    ],
  },
  {
    title: 'Electrical Service Technician',
    location: 'Multiple Markets',
    type: 'Full-Time',
    description:
      'Shops need electricians who can handle residential service calls, troubleshoot confidently, and represent the company well. If that sounds like you, we\'ll connect you with the right opportunity.',
    requirements: [
      'Journeyman electrician license or equivalent',
      '2+ years of residential/commercial electrical experience',
      'Strong troubleshooting and diagnostic skills',
      'Clean driving record and valid driver\'s license',
      'Professional and customer-facing demeanor',
    ],
  },
]

const perks = [
  'Competitive pay based on experience and market',
  'Placement with established, reputable trade shops',
  'No more job board hunting — we match you directly',
  'Shops that value and invest in their techs',
  'Opportunities across multiple markets nationwide',
]

function JobCard({ job }: { job: (typeof openings)[number] }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 sm:p-8 cursor-pointer"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3
              className="text-xl sm:text-2xl text-[#111827] mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
            >
              {job.title}
            </h3>
            <div className="flex flex-wrap gap-4 text-sm text-[#6B7280]">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-[#C2410C]" />
                {job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#C2410C]" />
                {job.type}
              </span>
            </div>
          </div>
          {expanded ? (
            <ChevronUp size={20} className="text-[#6B7280] shrink-0" />
          ) : (
            <ChevronDown size={20} className="text-[#6B7280] shrink-0" />
          )}
        </div>
      </button>

      {expanded && (
        <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-[#E5E7EB] pt-6">
          <p className="text-sm text-[#6B7280] leading-relaxed mb-6">{job.description}</p>
          <p className="text-sm text-[#111827] font-semibold mb-3">Requirements:</p>
          <div className="flex flex-col gap-2 mb-6">
            {job.requirements.map((req) => (
              <div key={req} className="flex gap-3 items-start">
                <CheckCircle size={14} className="text-[#C2410C] mt-0.5 shrink-0" />
                <span className="text-sm text-[#6B7280]">{req}</span>
              </div>
            ))}
          </div>
          <a
            href="https://meta.readycrewstaffing.com/lander"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C2410C] text-white rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-[#9A3412] transition-colors no-underline"
          >
            Apply Now
          </a>
        </div>
      )}
    </div>
  )
}

export default function HiringPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: '-50px' })
  const jobsRef = useRef(null)
  const jobsInView = useInView(jobsRef, { once: true, margin: '-100px' })
  const perksRef = useRef(null)
  const perksInView = useInView(perksRef, { once: true, margin: '-100px' })

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
            CAREERS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
          >
            You're a <span className="text-[#C2410C]">Skilled Tech.</span>
            <br />
            We'll Find You the Right Shop.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto"
          >
            Stop scrolling job boards. We connect experienced service technicians with trade shops that actually value their people. One conversation is all it takes.
          </motion.p>
        </div>
      </section>

      {/* Open Positions */}
      <section ref={jobsRef} className="w-full bg-[#F9FAFB] py-16 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="w-full max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={jobsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-widest uppercase text-[#C2410C] font-semibold mb-4 text-center"
          >
            OPEN POSITIONS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={jobsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl text-[#111827] mb-4 leading-tight text-center"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
          >
            Roles we're <span className="text-[#C2410C]">actively placing.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={jobsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-base sm:text-lg text-[#6B7280] mb-10 sm:mb-12 text-center"
          >
            Click a role to see details and requirements.
          </motion.p>

          <div className="flex flex-col gap-4">
            {openings.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                animate={jobsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={jobsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm text-[#6B7280] text-center mt-8"
          >
            Don't see your trade listed?{' '}
            <Link to="/contact" className="text-[#C2410C] font-semibold hover:underline">
              Reach out anyway
            </Link>{' '}
            — we're always expanding.
          </motion.p>
        </div>
      </section>

      {/* Why work with us */}
      <section ref={perksRef} className="w-full bg-white py-16 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={perksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-10 sm:mb-12"
          >
            <p className="text-xs tracking-widest uppercase text-[#C2410C] font-semibold mb-4">
              WHY READYCREW
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-[#111827] leading-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
            >
              What's in it for <span className="text-[#C2410C]">you.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={perksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#F9FAFB] rounded-2xl sm:rounded-3xl border border-[#E5E7EB] p-6 sm:p-8 md:p-10"
          >
            <div className="flex flex-col gap-4">
              {perks.map((perk) => (
                <div key={perk} className="flex gap-3 items-start">
                  <Briefcase size={16} className="text-[#C2410C] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-[#111827]">{perk}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={perksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-10 sm:mt-12"
          >
            <a
              href="https://meta.readycrewstaffing.com/lander"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C2410C] text-white rounded-full px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-semibold hover:bg-[#9A3412] shadow-lg transition-colors no-underline"
            >
              Get Started — Talk to Us
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
