import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, ArrowUpRight, Mail, Linkedin, Phone } from 'lucide-react'

const channels = [
  { label: 'EMAIL', value: 'antonydaniel2264@gmail.com', link: 'mailto:antonydaniel2264@gmail.com', copyable: true },
  { label: 'PHONE', value: '+91 81480 11659', link: 'tel:+918148011659', copyable: true },
  { label: 'LINKEDIN', value: 'linkedin.com/in/antony2212', link: 'https://linkedin.com/in/antony2212', copyable: false },
  { label: 'LOCATION', value: 'Salem, Tamil Nadu, India', link: null as string | null, copyable: false },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

const quickLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const socialLinks = [
  { icon: Mail, href: 'mailto:antonydaniel2264@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:+918148011659', label: 'Phone' },
  { icon: Linkedin, href: 'https://linkedin.com/in/antony2212', label: 'LinkedIn' },
]

function ContactRow({ channel, index }: { channel: (typeof channels)[number]; index: number }) {
  const [copied, setCopied] = useState(false)
  const rowRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = rowRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    rowRef.current?.style.setProperty('--x', `${x}%`)
    rowRef.current?.style.setProperty('--y', `${y}%`)
  }

  const handleClick = () => {
    if (!channel.copyable) return
    navigator.clipboard.writeText(channel.value)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const content = (
    <>
      <span className="text-xs sm:text-sm text-gray-500 tracking-widest">{channel.label}</span>
      <span className="flex items-center gap-2 text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors text-right">
        {channel.value}
        {channel.copyable ? (
          copied ? (
            <Check size={14} className="text-green-400" />
          ) : (
            <Copy size={14} className="opacity-0 group-hover:opacity-60 transition-opacity" />
          )
        ) : (
          <ArrowUpRight
            size={14}
            className="opacity-0 group-hover:opacity-60 -translate-x-1 group-hover:translate-x-0 transition-all"
          />
        )}
      </span>
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div
        ref={rowRef}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        className="relative flex items-center justify-between gap-4 border-t border-gray-800 py-5 md:py-6 group hover:bg-white/[0.02] transition-colors px-4 -mx-4 overflow-hidden cursor-pointer"
        style={{
          backgroundImage:
            'radial-gradient(300px circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.04), transparent 70%)',
        }}
      >
        {channel.link ? (
          <a
            href={channel.link}
            target={channel.link.startsWith('http') ? '_blank' : undefined}
            rel={channel.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="flex items-center justify-between gap-4 w-full"
          >
            {content}
          </a>
        ) : (
          <div className="flex items-center justify-between gap-4 w-full">{content}</div>
        )}
      </div>
    </motion.div>
  )
}

export function Contact() {
  return (
      <section id="contact" className="section-padding bg-[#0d0d0d]" style={{ paddingBottom: '4rem' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Contact</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-[12vw] lg:text-hero leading-none tracking-tight mb-8"
        >
          Get in touch
        </motion.h2>

        <motion.div {...fadeInUp} className="w-full h-px bg-gray-700 mb-12 lg:mb-16" />

        <motion.div {...fadeInUp} className="mb-12 lg:mb-16 max-w-2xl">
          <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-tight mb-4">
            Have a process worth fixing?
          </h3>
          <p className="text-sm text-gray-500 tracking-widest uppercase">
            I'm open to business analyst, data analyst, and process/automation roles — happy to walk through any of the projects above in more detail.
          </p>
        </motion.div>

        <div className="space-y-0 max-w-3xl">
          {channels.map((channel, index) => (
            <ContactRow key={channel.label} channel={channel} index={index} />
          ))}
          <div className="border-t border-gray-800" />
        </div>

        <motion.footer {...fadeInUp} className="mt-24 lg:mt-32 pt-16 border-t border-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-12">
            <div>
              <p className="font-display text-2xl text-white mb-3">ANTONY DANIEL</p>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                Business Analyst specializing in process optimization, requirements gathering
                and data-driven decisions.
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-600 tracking-widest uppercase mb-4">Quick Links</p>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs text-gray-600 tracking-widest uppercase mb-4">Connect</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-800 text-gray-500 hover:border-gray-500 hover:text-white transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} Antony Daniel. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">Salem / Tamil Nadu / India</p>
          </div>
        </motion.footer>
      </div>
    </section>
  )
}
