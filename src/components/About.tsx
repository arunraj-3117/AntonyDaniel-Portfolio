import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

const focusAreas = [
  {
    title: 'Requirements & Documentation',
    body: 'Requirements elicitation with stakeholders, translated into clear BRD, FRD, user stories, use cases and traceability matrices that development teams can act on.',
  },
  {
    title: 'Process Optimization',
    body: 'As-Is and To-Be process mapping, gap analysis and Root Cause Analysis to remove bottlenecks and redesign workflows for measurable efficiency gains.',
  },
  {
    title: 'Data-Driven Decisions',
    body: 'KPI monitoring, SQL analysis and Power BI dashboards that turn operational data into decisions on pricing, sales focus and resource allocation.',
  },
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
              I'm <span className="text-white">Antony Daniel</span>, a Business Analyst with 1+ year
              of experience turning requirements into clear BRD/FRD docs, and processes into
              measurable efficiency gains.
            </p>
            <p className="mt-4 text-base lg:text-lg text-gray-400 leading-relaxed">
              A B.Tech graduate in AI & Data Science, I blend business analysis with data
              analytics — RCA, CRM operations and KPI monitoring included.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="space-y-0"
          >
            {focusAreas.map((area, i) => (
              <div
                key={area.title}
                className="border-t border-gray-800 py-6 group transition-all duration-300 hover:pl-3 hover:border-gray-500"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-xs text-gray-600 group-hover:text-white transition-colors shrink-0 font-mono">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg lg:text-xl text-white font-light mb-2 group-hover:translate-x-1 transition-transform">
                      {area.title}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-500 leading-relaxed">{area.body}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-gray-800" />
          </motion.div>
        </div>

        {/* Impact quote */}
        <motion.div {...fadeInUp}>
          <h2 className="font-display text-[4vw] lg:text-6xl xl:text-8xl leading-tight tracking-tight text-gray-300">
            "REDUCED OPERATIONAL<br />
            LOSSES BY 75% <br />
            THROUGH RCA AND<br />
            PROCESS OPTIMIZATION."
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            FIXO CARE — BUSINESS DEVELOPMENT<br />
            SALEM / INDIA
          </p>
        </motion.div>
      </div>
    </section>
  )
}
