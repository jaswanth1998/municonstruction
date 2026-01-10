import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Sun,
  Moon,
  Phone,
  ChevronDown,
  Home,
  Building2,
  Wrench,
  Warehouse,
  Box,
  ClipboardList,
} from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { companyInfo } from '../../config/theme'
import Button from './Button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'Residential Construction', href: '/services#residential', icon: Home },
      { name: 'Commercial Construction', href: '/services#commercial', icon: Building2 },
      { name: 'Renovations & Remodeling', href: '/services#renovations', icon: Wrench },
      { name: 'Roofing & Siding', href: '/services#roofing', icon: Warehouse },
      { name: 'Concrete & Foundations', href: '/services#concrete', icon: Box },
      { name: 'Project Management', href: '/services#project-management', icon: ClipboardList },
    ],
  },
  { name: 'Projects', href: '/projects' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [location])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <span
                className={`font-accent text-2xl md:text-3xl tracking-wider ${
                  isScrolled || isMobileMenuOpen
                    ? 'text-primary-500'
                    : 'text-primary-500'
                }`}
              >
                MUNI
              </span>
              <span
                className={`font-heading font-bold text-lg md:text-xl ml-1 ${
                  isScrolled || isMobileMenuOpen
                    ? 'text-gray-900 dark:text-white'
                    : location.pathname === '/' && !isScrolled
                    ? 'text-white'
                    : 'text-gray-900 dark:text-white'
                }`}
              >
                Construction
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-1 ${
                    isActive(item.href)
                      ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20'
                      : isScrolled
                      ? 'text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-slate-800'
                      : location.pathname === '/'
                      ? 'text-white/90 hover:text-white hover:bg-white/10'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-500'
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700 overflow-hidden"
                      >
                        {item.dropdown.map((subItem) => {
                          const Icon = subItem.icon
                          return (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-500 transition-colors"
                            >
                              <Icon className="w-5 h-5 text-primary-500" />
                              <span className="text-sm font-medium">{subItem.name}</span>
                            </Link>
                          )
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                  : location.pathname === '/'
                  ? 'text-white/90 hover:bg-white/10'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
              }`}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* CTA Button */}
            <Button to="/contact" size="sm">
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled || isMobileMenuOpen
                  ? 'text-gray-700 dark:text-gray-300'
                  : location.pathname === '/'
                  ? 'text-white'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors z-50 ${
                isScrolled || isMobileMenuOpen
                  ? 'text-gray-700 dark:text-gray-300'
                  : location.pathname === '/'
                  ? 'text-white'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 bg-white dark:bg-slate-900 lg:hidden overflow-y-auto"
          >
            <div className="container-custom py-6">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 mt-1 flex flex-col gap-1">
                        {item.dropdown.map((subItem) => {
                          const Icon = subItem.icon
                          return (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center gap-3 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                            >
                              <Icon className="w-4 h-4" />
                              <span className="text-sm">{subItem.name}</span>
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-700">
                <Button to="/contact" className="w-full">
                  Get Free Quote
                </Button>
                <a
                  href={`tel:${companyInfo.phone.replace(/[^0-9]/g, '')}`}
                  className="flex items-center justify-center gap-2 mt-4 text-gray-600 dark:text-gray-400 hover:text-primary-500"
                >
                  <Phone className="w-5 h-5" />
                  <span>{companyInfo.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
