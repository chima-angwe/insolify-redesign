import { useEffect, useRef, useState } from 'react'
import type { PointerEvent as ReactPointerEvent } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { ChevronDown, Menu, X } from 'lucide-react'
import Logo from '../../ui/Logo'
import ThemeToggle from '../../ui/ThemeToggle'
import { EXTERNAL_LINKS } from '../../../config/links'
import { PRODUCT_MENU, RESOURCE_MENU, MAIN_LINKS } from '../../../data/nav'
import type { MenuItem } from '../../../data/nav'
import styles from './Header.module.css'
import ProductMark from '../../ui/ProductMark'

type MenuId = 'products' | 'resources'

function MenuLink({ item, onClick }: { item: MenuItem; onClick: () => void }) {
  const Icon = item.icon
  const inner = (
    <>
      {item.product ? (
        <ProductMark product={item.product} size="sm" />
      ) : (
        <span className={styles.tile}>{Icon && <Icon size={16} aria-hidden="true" />}</span>
      )}
      {item.label}
    </>
  )

  if (item.to) {
    return (
      <Link to={item.to} className={styles.menuLink} onClick={onClick}>
        {inner}
      </Link>
    )
  }
  return (
    <a
      href={item.href}
      className={styles.menuLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {inner}
    </a>
  )
}

export default function Header() {
  const [open, setOpen] = useState<MenuId | null>(null)
  const [mobile, setMobile] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  const openedByHover = useRef(false)
  const navRef = useRef<HTMLElement>(null)
  const { pathname } = useLocation()

  // close everything when the page changes
  useEffect(() => {
    setOpen(null)
    setMobile(false)
  }, [pathname])

  // Escape and outside click close the dropdown
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(null)
    }
    function onDown(e: PointerEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onDown)
    }
  }, [])

  // hover opens it, but only for a real mouse (touch uses taps)
  const hoverOpen = (id: MenuId) => (e: ReactPointerEvent) => {
    if (e.pointerType !== 'mouse') return
    window.clearTimeout(timer.current)
    openedByHover.current = true
    setOpen(id)
  }

  const hoverClose = (e: ReactPointerEvent) => {
    if (e.pointerType !== 'mouse') return
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => {
      openedByHover.current = false
      setOpen(null)
    }, 150)
  }

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link

  const renderDropdown = (id: MenuId, label: string, items: MenuItem[]) => {
    const isOpen = open === id
    return (
      <div
        className={styles.dropdown}
        onPointerEnter={hoverOpen(id)}
        onPointerLeave={hoverClose}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(null)
        }}
      >
        <button
          type="button"
          className={`${styles.trigger} ${isOpen ? styles.triggerOpen : ''}`}
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-controls={`menu-${id}`}
          onClick={() => {
            // a click right after a hover-open should keep the menu open, not close it
            if (openedByHover.current) {
              openedByHover.current = false
              setOpen(id)
              return
            }
            setOpen(isOpen ? null : id)
          }}
        >
          {label}
          <ChevronDown size={16} aria-hidden="true" className={isOpen ? styles.flip : undefined} />
        </button>

        {isOpen && (
          <div className={styles.panelWrap} id={`menu-${id}`}>
            <div className={styles.panel}>
              {items.map((i) => (
                <MenuLink key={i.label} item={i} onClick={() => setOpen(null)} />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} aria-label="Insolify home">
          <Logo />
        </Link>

        <nav ref={navRef} className={styles.desktopNav} aria-label="Main">
          {renderDropdown('products', 'Products', PRODUCT_MENU)}
          {RESOURCE_MENU.length > 0 && renderDropdown('resources', 'Resources', RESOURCE_MENU)}
          {MAIN_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.right}>
          <ThemeToggle />
          <a href={EXTERNAL_LINKS.account} className={`${styles.account} ${styles.desktopOnly}`}>
            Account
          </a>
          <button
            type="button"
            className={styles.burger}
            aria-label={mobile ? 'Close menu' : 'Open menu'}
            aria-expanded={mobile}
            onClick={() => setMobile(!mobile)}
          >
            {mobile ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobile && (
        <nav className={styles.mobileMenu} aria-label="Mobile">
          <p className={styles.group}>Products</p>
          {PRODUCT_MENU.map((i) => (
            <MenuLink key={i.label} item={i} onClick={() => setMobile(false)} />
          ))}

          {RESOURCE_MENU.length > 0 && (
            <>
              <p className={styles.group}>Resources</p>
              {RESOURCE_MENU.map((i) => (
                <MenuLink key={i.label} item={i} onClick={() => setMobile(false)} />
              ))}
            </>
          )}

          <div className={styles.divider} />
          {MAIN_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                isActive ? `${styles.mobileLink} ${styles.active}` : styles.mobileLink
              }
              onClick={() => setMobile(false)}
            >
              {l.label}
            </NavLink>
          ))}

          <a href={EXTERNAL_LINKS.account} className={`${styles.account} ${styles.accountBlock}`}>
            Account
          </a>
        </nav>
      )}
    </header>
  )
}