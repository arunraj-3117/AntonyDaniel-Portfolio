import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

const impactLedger = [
  {
    figure: '75%',
    desc: 'Reduction in operational losses at Fixo Care',
    sub: 'Root cause analysis, process optimization and continuous improvement',
  },
  {
    figure: '60%',
    desc: 'Drop in manual effort on lead-management workflows',
    sub: 'Automated with Power Automate and Python',
  },
  {
    figure: '35%',
    desc: 'Faster report preparation on the CRM optimization project',
    sub: 'BRD-driven KPI reporting and improved lead traceability',
  },
  {
    figure: '15%',
    desc: 'Gain in operational efficiency from redesigned To-Be workflows',
    sub: 'Cross-department workflow mapping and RCA',
  },
  {
    figure: '12%',
    desc: 'Revenue erosion identified across underperforming segments',
    sub: 'Profitability modeling to guide pricing and resourcing',
  },
]

const focusAreas = [
  { title: 'Business Analyst', body: 'BRD/FRD, requirements, RCA' },
  { title: 'Data Analyst', body: 'SQL, Power BI, BigQuery' },
  { title: 'Process Analyst', body: 'BPMN, workflow redesign' },
  { title: 'CRM / Sales Ops Analyst', body: 'Lead management, CRM workflows' },
  { title: 'Automation Analyst', body: 'Python, Power Automate' },
  { title: 'Product Analyst', body: 'User stories, UAT, Agile' },
]

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">About</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* Statement */}
        <motion.h2
          {...fadeInUp}
          className="font-display text-[7vw] lg:text-section leading-none tracking-tight text-gray-300 mb-16 lg:mb-24"
        >
          ANALYZE.<br />
          <span className="text-white">OPTIMIZE.</span><br />
          DELIVER VALUE.
        </motion.h2>

        {/* Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 mb-24 lg:mb-32">
          <motion.div {...fadeInUp} className="relative pl-6 border-l border-gray-800">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I'm a business analyst with 1+ year of experience in requirements gathering,
              process improvement, and data-driven decision-making. My background is in AI
              &amp; Data Science, which gives me a practical edge most BAs don't have: I can
              read the data behind a process, not just the process itself.
            </p>
            <p className="mt-4 text-base lg:text-lg text-gray-400 leading-relaxed">
              I enjoy taking a workflow apart to see where it actually breaks, then putting
              it back together — in a BRD, a dashboard, or a script — so the fix sticks.
              Outside assigned work, I keep researching, mentoring, and reverse-engineering
              systems just to understand how they hold together.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="space-y-0"
          >
            <p className="text-sm text-gray-500 tracking-widest uppercase mb-6">Roles I fit well</p>
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="flex items-center justify-between gap-4 border-t border-gray-800 py-4 group transition-colors hover:border-gray-500"
              >
                <span className="text-sm lg:text-base text-white group-hover:text-white">{area.title}</span>
                <span className="text-sm text-gray-500 text-right whitespace-nowrap">{area.body}</span>
              </div>
            ))}
            <div className="border-t border-gray-800" />
          </motion.div>
        </div>

        
        {/* Impact ledger */}
        <motion.div {...fadeInUp}>
          <p className="text-sm text-gray-500 tracking-widest uppercase mb-6">
            Impact, in the numbers behind the projects below
          </p>
          <div className="border-t border-gray-800">
            {impactLedger.map((item) => (
              <div
                key={item.figure}
                className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 sm:gap-6 items-baseline py-6 border-b border-gray-800"
              >
                <span className="font-display text-3xl lg:text-4xl text-amber-500">{item.figure}</span>
                <div>
                  <p className="text-sm lg:text-base text-gray-200">{item.desc}</p>
                  <p className="mt-1 text-xs lg:text-sm text-gray-500">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
