import { useRef } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'CRM Sales Conversion Optimization',
    tools: 'Cratio CRM · Excel · SQL · Power BI · Miro',
    duration: '3 months',
    challenge: 'Lead assignment, follow-ups, and stage progression in the CRM were inconsistent and hard to track.',
    approach: 'Mapped As-Is and To-Be processes, wrote the BRD, and supported UAT for the redesigned workflow.',
    result: 'Report preparation time cut by 35%, with clearer lead traceability across the pipeline.',
  },
  {
    title: 'Revenue & Profitability Optimization',
    tools: 'Excel · SQL · Power BI · Power Query',
    duration: '2 months',
    challenge: 'Underperforming service segments were quietly eroding overall profitability.',
    approach: 'Analyzed revenue, cost, and conversion data, then built profitability models and Power BI dashboards.',
    result: 'Identified 12% erosion and gave leadership a data basis for pricing and resource-allocation decisions.',
  },
  {
    title: 'Business Process Automation — Lead Management',
    tools: 'Google Sheets · Power BI · CRM · Python',
    duration: '3 months',
    challenge: 'Repetitive lead-management tasks were consuming 10–15 hours a week of manual effort.',
    approach: 'Redesigned the To-Be workflow and automated key steps with Power Automate and Python.',
    result: 'Manual intervention down 60%, plus 8 hours a week saved on reporting.',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

function ProjectRow({ project, index }: { project: (typeof projects)[number]; index: number }) {
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
        className="relative overflow-hidden py-10 md:py-12 px-4 -mx-4"
        style={{
          backgroundImage:
            'radial-gradient(500px circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.04), transparent 70%)',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-16">
          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">{project.title}</h3>
            <p className="text-xs md:text-sm text-gray-500 mb-1">{project.tools}</p>
            <p className="text-xs md:text-sm text-gray-600">{project.duration}</p>
          </div>

          <div className="grid gap-6">
            <div className="grid grid-cols-[90px_1fr] md:grid-cols-[110px_1fr] gap-4">
              <span className="text-sm text-gray-400 font-medium">Challenge</span>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">{project.challenge}</p>
            </div>
            <div className="grid grid-cols-[90px_1fr] md:grid-cols-[110px_1fr] gap-4">
              <span className="text-sm text-gray-400 font-medium">Approach</span>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">{project.approach}</p>
            </div>
            <div className="grid grid-cols-[90px_1fr] md:grid-cols-[110px_1fr] gap-4">
              <span className="text-sm text-white font-medium">Result</span>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">{project.result}</p>
            </div>
          </div>
        </div>
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
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-6"
        >
          FEATURED PROJECTS
        </motion.h2>

        <motion.p {...fadeInUp} className="text-sm md:text-base text-gray-500 max-w-2xl mb-16 lg:mb-24">
          Three projects, each following the same arc: a workflow that wasn't working, a redesign
          grounded in data, and a measurable result.
        </motion.p>

        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.title} project={project} index={i} />
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
