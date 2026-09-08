import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import heroImage from '@/assets/hero-arun.png'

const roles = ['Business Analyst', 'Process Optimization', 'Data Analytics']

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let delay = deleting ? 45 : 90

    if (!deleting && text === current) {
      delay = 1600
    } else if (deleting && text === '') {
      delay = 250
    }

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else {
        setText(
          deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1),
        )
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, index, words])

  return text
}

export function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-y-0 right-0 w-full md:w-[75%] lg:w-[65%] xl:max-w-[1100px]">
          <img
            src={heroImage} 
            alt="Arun Raj"
            className="w-full h-full object-cover object-[center_15%] sm:object-[center_20%] md:object-[center_25%] grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black/85 md:via-black/50 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-end md:items-center pb-24 md:pb-0 px-4 sm:px-6 md:px-12 lg:px-16 pt-32 md:pt-0">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="font-display leading-none tracking-tighter text-[14vw] sm:text-[11vw] md:text-hero">
              <span className="block text-white">ANTONY</span>
              <span className="block text-white">DANIEL</span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-5 md:mt-6 flex items-center gap-2 font-mono text-sm sm:text-base md:text-lg text-white tracking-widest uppercase"
            >
              <span className="text-white/40">&gt;</span>
              <span>{typed}</span>
              <span className="inline-block w-[0.6em] h-[1.1em] bg-white animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-5 text-sm sm:text-base text-white/70 max-w-xl leading-relaxed"
            >
              A business analyst who traces inefficiency to its root, then rebuilds the workflow around it.
            </motion.p>

            {/* Stat strip */}
            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-10 md:mt-14 flex flex-wrap gap-3 max-w-xl border-t border-white/20 pt-8"
            >
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 text-xs sm:text-sm tracking-widest uppercase bg-white text-black hover:bg-gray-200 transition-colors"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 text-xs sm:text-sm tracking-widest uppercase border border-white/40 text-white hover:bg-white/10 transition-colors"
              >
                Contact
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
