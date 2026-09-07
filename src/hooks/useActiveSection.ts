import { useState, useEffect } from 'react'

const sections = ['about', 'skills', 'work', 'projects', 'education', 'contact']

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('about')

  useEffect(() => {
    const handleScroll = () => {
      const markerY = window.innerHeight * 0.3

      let current = sections[0]
      for (const id of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= markerY) {
          current = id
        }
      }
      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return activeSection
}