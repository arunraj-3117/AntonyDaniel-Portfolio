import { motion } from 'framer-motion'

const items = [
  {
    title: 'Researcher',
    body: 'Independent research into business models, emerging tools, and industry patterns.',
    prompt: 'Add your topic here — e.g. "AI adoption patterns in SME CRM systems."',
  },
  {
    title: 'Overall Analyst',
    body: 'Connecting market, process, and data into one end-to-end view rather than a single function.',
    prompt: 'Add an example that spans market + process + data.',
  },
  {
    title: 'Innovation Strategist',
    body: 'Self-initiated ideas, business models, or improvement concepts — not assigned, proposed.',
    prompt: "Add a concept or proposal you've designed on your own.",
  },
  {
    title: 'Business Innovation & Solutions Analyst',
    body: 'Solutions that blend business needs with technical capability, drawing on the AI/DS background.',
    prompt: 'Add an AI-plus-business-problem concept here.',
  },
]

const caseStudies = [
  {
    tag: '01 / PRODUCT INNOVATION',
    icon: '📞',
    title: 'Smart Unknown Caller Decision System',
    body: 'Helping users decide whether an unknown call is worth answering using contextual intelligence.',
    before: 'Who is calling?',
    after: 'Should I answer?',
    meta: 'AI · User Behavior · Product',
  },
  {
    tag: '02 / DECISION INTELLIGENCE',
    icon: '🧠',
    title: 'Decision Evidence Assistant',
    body: 'Helping decision-makers identify missing evidence before making important business decisions.',
    before: 'What should we decide?',
    after: 'Do we know enough to decide?',
    meta: 'AI · Evidence · Business Analysis',
  },
  {
    tag: '03 / BA INNOVATION',
    icon: '🎯',
    title: 'AI Business Question Generator',
    body: 'Transforming vague business problems into prioritized investigation questions.',
    before: "What's the answer?",
    after: 'What should we ask first?',
    meta: 'AI · Business Analysis · Analytics',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}


export function InnovationLab() {
  return (
    <section id="innovation" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Beyond the Role</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-6"
        >
          INNOVATION LAB
        </motion.h2>

        <motion.p {...fadeInUp} className="text-sm md:text-base text-gray-500 max-w-2xl mb-6 lg:mb-8 italic">
          Beyond assigned work, I spend personal time researching, strategizing, and reverse-engineering
          systems — analysis as a habit, not just a job function.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-10 lg:items-stretch">
          {/* Left: list design, now showing case studies content */}
          <motion.div {...fadeInUp} className="space-y-0">
            {caseStudies.map((cs) => (
              <div
                key={cs.title}
                className="border-t border-gray-800 py-3.5 group transition-all duration-300 hover:pl-3 hover:border-gray-500"
              >
                <p className="text-[10px] text-gray-500 tracking-widest uppercase mb-1.5">{cs.tag}</p>
                <h3 className="text-base lg:text-lg text-white font-light mb-1">
                  {cs.icon} {cs.title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-500 leading-snug mb-1.5">{cs.body}</p>
                <p className="pl-3 border-l-2 border-amber-500 text-xs text-gray-600 italic leading-snug">
                  "{cs.before}" → "{cs.after}"
                </p>
              </div>
            ))}
            <div className="border-t border-gray-800" />
          </motion.div>

          {/* Right: card grid design, now showing roles content */}
          <motion.div {...fadeInUp} className="h-full grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-3">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col justify-center rounded-xl border border-gray-800 bg-white/[0.02] p-4 hover:border-gray-600 hover:bg-white/[0.04] transition-colors"
              >
                <h4 className="text-sm lg:text-base text-white font-medium leading-snug">{item.title}</h4>
                <p className="mt-1.5 text-xs lg:text-sm text-gray-500 leading-snug">{item.body}</p>
                <p className="mt-3 pt-2.5 border-t border-gray-800 text-xs lg:text-sm text-gray-400 italic leading-snug">
                  {item.prompt}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
