import { Outlet } from 'react-router'
import Header from '../Header'
import Footer from '../Footer'
import ScrollToTop from '../ScrollToTop'
import { useAutoReveal } from '../../../hooks/useAutoReveal'

export default function Layout() {
  useAutoReveal()

  return (
    <>
      <ScrollToTop />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}