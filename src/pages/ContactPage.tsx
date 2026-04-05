import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, ChevronDown, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@readycrewstaffing.com' },
  { icon: Phone, label: 'Phone', value: '(555) 123-4567' },
  { icon: MapPin, label: 'Serving', value: 'Trade shops nationwide' },
]

export default function ContactPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: '-50px' })
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', company: '', trucks: '', city: '', message: '' })

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

      {/* Form + Contact Info */}
      <section ref={formRef} className="w-full bg-white py-16 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:col-span-2"
          >
            <p className="text-xs tracking-widest uppercase text-[#C2410C] font-semibold mb-4">
              CONTACT INFO
            </p>
            <h2
              className="text-2xl sm:text-3xl text-[#111827] leading-tight mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
            >
              Reach out directly.
            </h2>
            <p className="text-sm text-[#6B7280] leading-relaxed mb-8">
              Fill out the form and we'll get back to you within one business day. Or reach us directly using the info below.
            </p>

            <div className="flex flex-col gap-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-3 items-start">
                  <item.icon size={18} className="text-[#C2410C] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-[#6B7280] uppercase tracking-wider font-semibold">{item.label}</p>
                    <p className="text-sm text-[#111827] font-medium mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-[#E5E7EB]">
              <p
                className="text-lg text-[#111827] mb-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
              >
                What to expect:
              </p>
              <div className="flex flex-col gap-2">
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
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-3 bg-[#F9FAFB] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#E5E7EB]"
          >
            <h3
              className="text-xl sm:text-2xl text-[#111827] mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
            >
              Send us a message
            </h3>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#111827] font-semibold mb-1.5">Your name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C] outline-none transition bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#111827] font-semibold mb-1.5">Your email</label>
                  <input
                    type="email"
                    placeholder="john@acmehvac.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C] outline-none transition bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#111827] font-semibold mb-1.5">Company name</label>
                <input
                  type="text"
                  placeholder="Acme HVAC"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C] outline-none transition bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#111827] font-semibold mb-1.5">
                    Number of service trucks
                  </label>
                  <div className="relative">
                    <select
                      value={form.trucks}
                      onChange={(e) => setForm({ ...form, trucks: e.target.value })}
                      className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C] outline-none transition appearance-none bg-white"
                    >
                      <option value="" disabled>Select...</option>
                      <option value="1-3">1-3 trucks</option>
                      <option value="4-8">4-8 trucks</option>
                      <option value="9-15">9-15 trucks</option>
                      <option value="16+">16+ trucks</option>
                      <option value="na">N/A (I'm a technician)</option>
                    </select>
                    <ChevronDown size={16} className="text-[#6B7280] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-[#111827] font-semibold mb-1.5">City</label>
                  <input
                    type="text"
                    placeholder="e.g. Phoenix, AZ"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C] outline-none transition bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#111827] font-semibold mb-1.5">Message</label>
                <textarea
                  placeholder="Tell us what you're looking for..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C] outline-none transition resize-none bg-white"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#C2410C] text-white rounded-xl py-3.5 font-bold text-sm sm:text-base hover:bg-[#9A3412] transition-colors cursor-pointer mt-2"
              >
                Send Message
              </motion.button>

              <p className="text-center text-xs text-[#6B7280] mt-1">
                We'll get back to you within one business day.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  )
}
