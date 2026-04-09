import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import useSEO from '../hooks/useSEO'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@readycrewstaffing.com' },
  { icon: Phone, label: 'Phone', value: '(555) 123-4567' },
  { icon: MapPin, label: 'Serving', value: 'Trade shops nationwide' },
]

export default function ContactPage() {
  useSEO(
    'Contact Us',
    'Get in touch with ReadyCrew Trades Placement. Whether you\'re a shop owner looking for techs or a skilled tradesperson looking for work — we\'re here to help.'
  )

  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: '-50px' })
  const infoRef = useRef(null)
  const infoInView = useInView(infoRef, { once: true, margin: '-100px' })

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
            GET IN TOUCH
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
          >
            Let's Talk About Your <span className="text-[#C2410C]">Next Hire.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto"
          >
            Whether you're a shop owner looking for techs or a skilled tradesperson looking for the right fit — we're here to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Info + CTA */}
      <section ref={infoRef} className="w-full bg-white py-16 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="w-full max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={infoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-widest uppercase text-[#C2410C] font-semibold mb-4">
              CONTACT INFO
            </p>
            <h2
              className="text-2xl sm:text-3xl text-[#111827] leading-tight mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
            >
              Reach out directly.
            </h2>
            <p className="text-sm text-[#6B7280] leading-relaxed max-w-xl mx-auto">
              Use the chat widget in the bottom-right corner to start a conversation, or reach us through the channels below.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={infoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center sm:items-start mb-12"
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1.5 text-center">
                <item.icon size={22} className="text-[#C2410C] mb-1" />
                <p className="text-xs text-[#6B7280] uppercase tracking-wider font-semibold">{item.label}</p>
                <p className="text-sm text-[#111827] font-medium">{item.value}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={infoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-[#F9FAFB] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] text-center"
          >
            <h3
              className="text-xl sm:text-2xl text-[#111827] mb-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
            >
              What to expect
            </h3>
            <div className="flex flex-col gap-2 items-center mb-6">
              {[
                'Response within 1 business day',
                'No obligation or commitment',
                'A real conversation — not a sales pitch',
              ].map((item) => (
                <div key={item} className="flex gap-2 items-center">
                  <CheckCircle size={14} className="text-[#C2410C] shrink-0" />
                  <span className="text-sm text-[#6B7280]">{item}</span>
                </div>
              ))}
            </div>
            <motion.a
              href="https://meta.readycrewstaffing.com/lander"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-[#C2410C] text-white rounded-full px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-semibold hover:bg-[#9A3412] shadow-lg cursor-pointer no-underline"
            >
              Book a Placement Strategy Call
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
