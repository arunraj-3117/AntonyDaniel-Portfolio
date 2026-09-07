import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const groups = [
  {
    label: 'Business Analysis',
    items: [
      'Requirements Elicitation & Gathering', 'BRD', 'FRD', 'User Stories', 'Use Cases', 'UAT',
      'Process Mapping', 'Workflow Analysis', 'Gap Analysis', 'Root Cause Analysis (RCA)',
      'Process Optimization', 'Stakeholder Management', 'CRM Operations', 'Lead Management',
      'Sales Process Analysis', 'Operational Efficiency Improvement', 'Data-Driven Decision Making',
    ],
  },
  {
    label: 'Methodologies & Frameworks',
    items: [
      'Agile', 'Scrum', 'Kanban', 'Waterfall', 'Hybrid', 'SWOT Analysis', 'PESTLE Analysis',
      'MOST Analysis', 'CATWOE', 'Business Model Canvas', 'MoSCoW Method', 'Kano Model', 'WSJF',
      'POPIT Model', 'McKinsey 7-S Framework', 'ADKAR Model', 'BDD', 'FEMA', 'RTM', 'BPMN 2.0', 'UML',
    ],
  },
  {
    label: 'Technical Tools',
    items: [
      'Power BI', 'Looker Studio', 'Bizagi', 'Lucidchart', 'MS Visio', 'JIRA', 'Trello',
      'Google Docs', 'PowerPoint', 'BigQuery', 'Python', 'Excel', 'Google Sheets', 'SQL',
    ],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

const tagVariants = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.03, duration: 0.4, ease: 'easeOut' },
  }),
}

export function Skills() {
  const [active, setActive] = useState(0)

  return (
    <section id="skills" className="section-padding bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Expertise</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-16"
        >
          SKILLS
        </motion.h2>

        {/* Category tabs */}
        <motion.div {...fadeInUp} className="flex flex-wrap gap-x-10 gap-y-4 border-b border-gray-800 mb-12">
          {groups.map((group, i) => (
            <button
              key={group.label}
              onClick={() => setActive(i)}
              className="relative pb-4 text-left group"
            >
              <span
                className={`text-xs tracking-widest uppercase transition-colors ${
                  active === i ? 'text-white' : 'text-gray-600 group-hover:text-gray-400'
                }`}
              >
                0{i + 1} — {group.label}
              </span>
              {active === i && (
                <motion.div
                  layoutId="skills-tab-underline"
                  className="absolute left-0 right-0 -bottom-px h-px bg-white"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Ghost number background */}
        <span className="pointer-events-none select-none absolute -top-4 right-0 font-display text-[14vw] leading-none text-white/[0.15]">
          0{active + 1}
        </span>

        {/* Tags */}
        <div className="relative min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="flex flex-wrap gap-2.5"
            >
              {groups[active].items.map((item, i) => (
                <motion.span
                  key={item}
                  custom={i}
                  variants={tagVariants}
                  className="px-4 py-2 text-xs md:text-sm text-gray-400 border border-gray-800 rounded-full hover:border-white/40 hover:text-white hover:bg-white/5 transition-colors cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}