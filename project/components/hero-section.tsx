
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, MapPin, Calendar, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedCounter from './animated-counter'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: "/AUTOBUS_5.jpg",
      title: "Más de 50 años conectando Toledo con España y Portugal",
      subtitle: "Especialistas en transporte de grupos, bodas y excursiones"
    },
    {
      image: "/AUTOBUS1.jpg", 
      title: "Tu día especial merece el mejor transporte",
      subtitle: "Servicios exclusivos para bodas y eventos únicos"
    },
    {
      image: "/AUTOBUS_4.jpg",
      title: "Descubre Puy de Fou con total comodidad", 
      subtitle: "Excursiones organizadas desde Toledo y Madrid"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full bg-gray-200">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 mb-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-bus-gold-400">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <p className="text-sm md:text-base text-gray-300">Años de experiencia</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-bus-gold-400">
                <AnimatedCounter end={10} />
              </div>
              <p className="text-sm md:text-base text-gray-300">Autobuses en flota</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-bus-gold-400">
                <AnimatedCounter end={1000} suffix="+" />
              </div>
              <p className="text-sm md:text-base text-gray-300">Servicios realizados</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-bus-gold-400">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <p className="text-sm md:text-base text-gray-300">Satisfacción cliente</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-bus-gold-500 hover:bg-bus-gold-600 text-white">
              <Link href="/presupuesto">
                Solicitar Presupuesto Gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-bus-blue-900">
              <Link href="/servicios">
                Ver Nuestros Servicios
              </Link>
            </Button>
          </div>

          {/* Service Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            <Link href="/servicios/bodas" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <Users className="h-8 w-8 text-bus-gold-400 mx-auto mb-2" />
                <p className="text-sm font-medium">Bodas</p>
              </div>
            </Link>
            <Link href="/servicios/puy-de-fou" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <MapPin className="h-8 w-8 text-bus-gold-400 mx-auto mb-2" />
                <p className="text-sm font-medium">Puy de Fou</p>
              </div>
            </Link>
            <Link href="/servicios/colegios" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <Calendar className="h-8 w-8 text-bus-gold-400 mx-auto mb-2" />
                <p className="text-sm font-medium">Colegios</p>
              </div>
            </Link>
            <Link href="/servicios/imserso" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <Star className="h-8 w-8 text-bus-gold-400 mx-auto mb-2" />
                <p className="text-sm font-medium">IMSERSO</p>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-bus-gold-400' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
