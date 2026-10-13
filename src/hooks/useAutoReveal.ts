import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router'

// Anything matching this fades up as it scrolls into view. Add data-reveal-item to opt in.
const SELECTOR = 'main article, main section header h2, main [data-reveal-item]'

export function useAutoReveal() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    // Only things below the first screen are hidden; the first screen is never blank.
    const fold = window.innerHeight * 0.92
    const targets = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR)).filter(
      (el) => el.getBoundingClientRect().top + window.scrollY > fold,
    )

    targets.forEach((el) => {
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : []
      const index = Math.max(0, siblings.indexOf(el))
      el.style.setProperty('--d', `${Math.min(index, 5) * 70}ms`)
      el.setAttribute('data-reveal', 'pending')
    })

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.setAttribute('data-reveal', 'in')
          io.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )
    targets.forEach((el) => io.observe(el))

    return () => {
      io.disconnect()
      targets.forEach((el) => {
        el.removeAttribute('data-reveal')
        el.style.removeProperty('--d')
      })
    }
  }, [pathname])
}