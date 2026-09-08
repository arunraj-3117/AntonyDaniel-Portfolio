import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const experiences = [
  {
    period: 'Sept 2025 — Present',
    title: 'Business Analyst, Business Development Department',
    company: 'Fixo Care, Salem',
    points: [
      'Reduced operational losses by 75% through RCA, process optimization, and continuous improvement.',
      'Identified cross-department bottlenecks and redesigned To-Be workflows, improving efficiency by 15%.',
      'Improved lead management and sales performance through data-driven analysis and KPI monitoring.',
    ],
  },
  {
    period: 'June 2025 — Aug 2025',
    title: 'Business Analyst Intern — Compliance',
    company: 'SAT Connections, Salem',
    points: [
      'Prepared and maintained process flows, requirement specifications, and workflow diagrams.',
      'Collaborated cross-functionally to analyze workflows and support process optimization.',
      'Built hands-on experience in stakeholder communication and Agile methodologies.',
    ],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: 'easeOut' }
}

function ExperienceCard({ exp, index }: { exp: (typeof experiences)[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
      className="relative pl-12 md:pl-20 pb-16 md:pb-24 last:pb-0 group"
    >
      {/* Timeline node */}
      <div className="absolute left-0 top-1 w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-700 bg-[#0a0a0a] flex items-center justify-center text-xs text-gray-500 group-hover:border-white group-hover:text-white group-hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all duration-500 z-10">
        0{index + 1}
      </div>

      {/* Card */}
      <div className="rounded-2xl border border-gray-800 p-6 md:p-10 transition-all duration-500 group-hover:border-gray-600 group-hover:bg-white/[0.02] group-hover:-translate-y-1">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-1">{exp.title}</h3>
            <p className="text-base lg:text-lg text-gray-400">{exp.company}</p>
          </div>
          <span className="text-sm text-gray-500 tracking-widest uppercase whitespace-nowrap">{exp.period}</span>
        </div>

        <ul className="space-y-3">
          {exp.points.map((point, i) => (
            <motion.li
              key={point}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex gap-3 text-sm lg:text-base text-gray-400 leading-relaxed"
            >
              <span className="mt-2 w-1.5 h-1.5 bg-gray-700 shrink-0 group-hover:bg-white transition-colors" />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

export function Work() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 60%'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Career</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          WORK<br />EXPERIENCE
        </motion.h2>

        <div ref={containerRef} className="relative">
          <div className="absolute left-4 md:left-5 top-1 bottom-0 w-px bg-gray-800" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-5 top-1 w-px bg-white origin-top"
          />

          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
