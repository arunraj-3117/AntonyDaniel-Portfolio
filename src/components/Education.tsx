import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const beyondWork = [
  'Learning new things and updating myself',
  'Mentoring junior students',
  'Reading about various technology',
  'Reverse-engineering systems and concepts',
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

function CircularCGPA({ value, max = 10 }: { value: number; max?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [display, setDisplay] = useState(0)
  const radius = 42
  const circumference = 2 * Math.PI * radius
  const [offset, setOffset] = useState(circumference)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => {
        setDisplay(v)
        setOffset(circumference - (v / max) * circumference)
      },
    })
    return () => controls.stop()
  }, [isInView, value, max, circumference])

  return (
    <div ref={ref} className="relative w-32 h-32 md:w-36 md:h-36 mx-auto sm:mx-0 shrink-0">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="currentColor" strokeWidth="4" className="text-gray-800" />
        <circle
          cx="50" cy="50" r={radius} fill="none" stroke="currentColor" strokeWidth="4"
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round" className="text-white"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-2xl md:text-3xl text-white leading-none">{display.toFixed(2)}</span>
        <span className="text-[10px] text-gray-500 tracking-widest uppercase mt-1">CGPA</span>
      </div>
    </div>
  )
}

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Background</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EDUCATION
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="relative border border-gray-800 rounded-2xl p-6 md:p-10 lg:p-12 overflow-hidden"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
            className="absolute -top-10 -right-10 md:top-4 md:right-4 text-gray-800/50 pointer-events-none"
          >
            <GraduationCap size={120} strokeWidth={0.6} />
          </motion.div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Education details */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 sm:items-center text-center sm:text-left">
              <CircularCGPA value={7.98} />
              <div className="min-w-0">
                <p className="text-sm text-gray-500 tracking-widest uppercase mb-3">Sep 2021 — May 2025</p>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
                  B.Tech — Artificial Intelligence & Data Science
                </h3>
                <p className="text-base lg:text-lg text-gray-400">Knowledge Institute of Technology</p>
                <p className="text-sm text-gray-600 mt-1">Salem, Tamil Nadu</p>
              </div>
            </div>

            {/* Beyond work */}
            <div className="lg:border-l lg:border-gray-800 lg:pl-16 pt-10 lg:pt-0 border-t lg:border-t-0 border-gray-800">
              <p className="text-sm text-gray-500 tracking-widest uppercase mb-4">Beyond Work</p>
              <ul className="space-y-3">
                {beyondWork.map((item) => (
                  <li key={item} className="text-sm lg:text-base text-gray-400 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
