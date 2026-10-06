import { useEffect } from 'react'
import { useLocation } from 'react-router'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // 'instant' so it does not glide up the page when html has smooth scrolling
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return null
}