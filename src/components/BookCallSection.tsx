import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { CheckCircle, ChevronDown } from 'lucide-react'

const reassurances = [
  'Completely free — no cost to have the conversation.',
  'No deposit or commitment required to book.',
  "You'll leave with a clear picture of your next hire.",
]

export default function BookCallSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', trucks: '', city: '' })

  return (
    <section ref={ref} className="bg-[#111827] py-28 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-widest uppercase text-[#C2410C] font-semibold mb-4">
            GET STARTED
          </p>
          <h2
            className="text-4xl md:text-5xl text-white leading-tight mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
          >
            Book your Placement Strategy Call.
          </h2>
          <p className="text-base text-white/60 leading-relaxed mb-8">
            Twenty minutes. We'll tell you exactly what kind of tech we'd source for your shop, what the timeline looks like, and whether we're the right fit. No pitch. No pressure.
          </p>
          <div className="flex flex-col gap-3">
            {reassurances.map((item) => (
              <div key={item} className="flex gap-3 items-start">
                <CheckCircle size={16} className="text-[#C2410C] mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right column — Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 shadow-2xl"
        >
          <h3
            className="text-2xl text-[#111827] mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
          >
            Tell us about your shop
          </h3>

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm text-[#111827] font-semibold mb-1.5">Your name</label>
              <input
                type="text"
                placeholder="John Smith"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C] outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm text-[#111827] font-semibold mb-1.5">Your email</label>
              <input
                type="email"
                placeholder="john@acmehvac.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C] outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm text-[#111827] font-semibold mb-1.5">
                How many service trucks are you currently running?
              </label>
              <div className="relative">
                <select
                  value={form.trucks}
                  onChange={(e) => setForm({ ...form, trucks: e.target.value })}
                  className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C] outline-none transition appearance-none bg-white"
                >
                  <option value="" disabled>Select...</option>
                  <option value="1-3">1–3 trucks</option>
                  <option value="4-8">4–8 trucks</option>
                  <option value="9-15">9–15 trucks</option>
                  <option value="16+">16+ trucks</option>
                </select>
                <ChevronDown size={16} className="text-[#6B7280] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-[#111827] font-semibold mb-1.5">
                What city do your service trucks run out of?
              </label>
              <input
                type="text"
                placeholder="e.g. Phoenix, AZ"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C] outline-none transition"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#C2410C] text-white rounded-xl py-3.5 font-bold text-base hover:bg-[#9A3412] transition-colors cursor-pointer mt-2"
            >
              Yes — Get Me a Truck-Ready Tech
            </motion.button>

            <p className="text-center text-xs text-[#6B7280] mt-1">
              We'll reach out within one business day to schedule your call.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
