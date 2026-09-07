import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView, animate } from 'framer-motion'

const projects = [
  {
    index: '01',
    title: 'CRM Sales Conversion Optimization',
    duration: '3 Months',
    tools: ['Cratio CRM', 'Excel', 'SQL', 'Power BI', 'Miro'],
    summary:
      'Analyzed CRM workflows, lead assignment, follow-ups and stage progression. Gathered requirements and designed As-Is / To-Be processes for CRM improvements.',
    outcome:
      'Developed BRD requirements, supported UAT and implemented KPI reporting — reducing report preparation time by 35% and improving lead traceability.',
    metricValue: 35,
    metricSuffix: '%',
    metricLabel: 'Less report prep time',
  },
  {
    index: '02',
    title: 'Revenue & Profitability Optimization',
    duration: '2 Months',
    tools: ['Excel', 'SQL', 'Power BI', 'Power Query'],
    summary:
      'Analyzed revenue, cost, conversion and profitability data and identified 12% erosion across underperforming service segments.',
    outcome:
      'Built profitability models and Power BI dashboards supporting pricing, sales focus and resource-allocation decisions.',
    metricValue: 12,
    metricSuffix: '%',
    metricLabel: 'Margin erosion identified',
  },
  {
    index: '03',
    title: 'Business Process Automation — Lead Management',
    duration: '3 Months',
    tools: ['Google Sheets', 'Power BI', 'CRM', 'Python'],
    summary:
      'Analyzed lead-management workflows and identified repetitive activities consuming 10–15 hours per week of manual effort.',
    outcome:
      'Designed To-Be workflows and implemented automations with Power Automate and Python, cutting manual intervention by 60% and reporting effort by 8 hours per week.',
    metricValue: 60,
    metricSuffix: '%',
    metricLabel: 'Less manual work',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [isInView, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const [open, setOpen] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    cardRef.current?.style.setProperty('--x', `${x}%`)
    cardRef.current?.style.setProperty('--y', `${y}%`)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="border-t border-gray-800"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onClick={() => setOpen((o) => !o)}
        className="relative overflow-hidden cursor-pointer py-8 md:py-10 px-4 -mx-4 transition-colors group"
        style={{
          backgroundImage:
            'radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.05), transparent 70%)',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-1">
            <span className="font-display text-2xl text-gray-700 group-hover:text-white transition-colors">
              {project.index}
            </span>
          </div>

          <div className="lg:col-span-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2 flex items-center gap-3">
              {project.title}
              <motion.span
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-500 text-2xl leading-none"
              >
                +
              </motion.span>
            </h3>
            <p className="text-sm text-gray-600 mb-4 tracking-widest uppercase">{project.duration}</p>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 lg:text-right">
            <p className="font-display text-4xl lg:text-5xl text-white leading-none">
              <Counter value={project.metricValue} suffix={project.metricSuffix} />
            </p>
            <p className="mt-2 text-xs text-gray-500 tracking-widest uppercase">{project.metricLabel}</p>
          </div>

          <div className="lg:col-span-2 flex lg:justify-end">
            <span className="text-xs text-gray-600 tracking-widest uppercase group-hover:text-gray-300 transition-colors">
              {open ? 'Close' : 'View'}
            </span>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 pt-6 mt-6 border-t border-gray-800/60">
                <p className="text-sm lg:text-base text-gray-400 leading-relaxed">{project.summary}</p>
                <p className="text-sm lg:text-base text-gray-500 leading-relaxed">{project.outcome}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Case Studies</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          PROJECTS
        </motion.h2>

        <div>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
          <div className="border-t border-gray-800" />
        </div>

        <p className="mt-8 text-xs text-gray-600 tracking-wide uppercase">
          Click a project to expand details
        </p>
      </div>
    </section>
  )
}