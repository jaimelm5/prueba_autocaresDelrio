
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Bus, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/empresa', label: 'Empresa' },
    { href: '/destinos', label: 'Destinos' },
    { href: '/contacto', label: 'Contacto' },
  ]

  const serviceItems = [
    { href: '/servicios/bodas', label: 'Bodas' },
    { href: '/servicios/administraciones', label: 'Administraciones' },
    { href: '/servicios/colegios', label: 'Colegios' },
    { href: '/servicios/clubes-deportivos', label: 'Clubes Deportivos' },
    { href: '/servicios/imserso', label: 'IMSERSO' },
    { href: '/servicios/particulares', label: 'Particulares' },
    { href: '/servicios/puy-de-fou', label: 'Puy de Fou' },
  ]

  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-bus-blue-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>925 123 456</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@autobusesdelrio.com</span>
            </div>
          </div>
          <div className="text-bus-gold-400">
            Más de 50 años de experiencia
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <img 
                  src="/logo-autobuses-del-rio.jpg" 
                  alt="Autobuses del Río Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-bus-blue-900">
                  Autobuses del Río
                </h1>
                <p className="text-sm text-bus-blue-600 hidden sm:block">
                  Toledo • España • Portugal
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-bus-blue-600 font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bus-blue-600 transition-all group-hover:w-full"></span>
                </Link>
              ))}
              <Button asChild className="bg-bus-blue-600 hover:bg-bus-blue-700">
                <Link href="/presupuesto">
                  Solicitar Presupuesto
                </Link>
              </Button>
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t shadow-lg"
            >
              <div className="max-w-6xl mx-auto px-4 py-4">
                <nav className="space-y-4">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-gray-700 hover:text-bus-blue-600 font-medium py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  {/* Services submenu for mobile */}
                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Servicios</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {serviceItems.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="text-sm text-gray-600 hover:text-bus-blue-600 py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <Button asChild className="w-full bg-bus-blue-600 hover:bg-bus-blue-700 mt-4">
                    <Link href="/presupuesto" onClick={() => setIsMenuOpen(false)}>
                      Solicitar Presupuesto
                    </Link>
                  </Button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default Header
