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

        <motion.p {...fadeInUp} className="text-sm md:text-base text-gray-500 max-w-2xl mb-16 lg:mb-20 italic">
          Beyond assigned work, I spend personal time researching, strategizing, and reverse-engineering
          systems — analysis as a habit, not just a job function.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-gray-800">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-r border-b border-gray-800 p-8 md:p-10 hover:bg-white/[0.02] transition-colors"
            >
              <h3 className="text-lg md:text-xl text-white font-light mb-3">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">{item.body}</p>
              <p className="pl-3 border-l-2 border-amber-500 text-sm text-gray-500 italic leading-relaxed">
                {item.prompt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}