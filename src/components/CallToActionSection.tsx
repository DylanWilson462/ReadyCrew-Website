import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CallToActionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="w-full bg-[#C2410C] py-16 sm:py-20 px-4 sm:px-6">
      <div className="w-full max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
        >
          Your trucks shouldn't sit empty another week.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 sm:mb-10"
        >
          Book your free Placement Strategy Call today. Twenty minutes from now, you'll know exactly what your next hire looks like and when they'll be starting.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white text-[#C2410C] rounded-full px-8 sm:px-12 py-3.5 sm:py-4 text-sm sm:text-base font-bold hover:bg-white/90 shadow-xl cursor-pointer"
        >
          Yes — Get Me a Truck-Ready Tech
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-white/60 mt-4"
        >
          Free call. No commitment. No pressure.
        </motion.p>
      </div>
    </section>
  )
}
