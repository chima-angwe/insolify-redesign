import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Fincore from './pages/Fincore'
import Safi from './pages/Safi'
import Settle from './pages/Settle'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Track from './pages/Track'
import Status from './pages/Status'
import Privacy from './pages/Privacy'
import Legacy from './pages/Legacy'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fincore" element={<Fincore />} />
          <Route path="safi" element={<Safi />} />
          <Route path="settle" element={<Settle />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
          <Route path="track" element={<Track />} />
          <Route path="status" element={<Status />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="legacy" element={<Legacy />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}