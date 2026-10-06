import { useCallback, useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

// `ids` must keep the same identity between renders (define it once, or useMemo it).
export function useScrollSpy(ids: string[], navRef: RefObject<HTMLElement | null>) {
  const [active, setActive] = useState(ids[0])
  const locked = useRef(false)
  const timer = useRef<number | undefined>(undefined)

  // The active section is the last one whose top has passed just below the sticky bars
  const compute = useCallback(() => {
    const nav = navRef.current
    const offset = (nav ? nav.getBoundingClientRect().bottom : 0) + 16 + 2
    let current = ids[0]
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el && el.getBoundingClientRect().top <= offset) current = id
    }
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
    return atBottom ? ids[ids.length - 1] : current
  }, [ids, navRef])

  useEffect(() => {
    // arriving from a link like /privacy#cookies
    const hash = window.location.hash.slice(1)
    if (hash && ids.includes(hash)) {
      document
        .getElementById(hash)
        ?.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' })
    }

    let frame = 0
    const onScroll = () => {
      if (locked.current) {
        // a tab click is scrolling: ignore scroll updates until it stops
        window.clearTimeout(timer.current)
        timer.current = window.setTimeout(() => {
          locked.current = false
        }, 120)
        return
      }
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setActive(compute()))
    }

    setActive(compute())
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(timer.current)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [compute, ids])

  const select = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    setActive(id) // instant: no waiting for the scroll
    locked.current = true
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => {
      locked.current = false
    }, 250) // released sooner if the page is already in place

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({
      behavior: (reduce ? 'instant' : 'smooth') as ScrollBehavior,
      block: 'start',
    })
    window.history.replaceState(window.history.state, '', `#${id}`)
  }, [])

  return { active, select }
}