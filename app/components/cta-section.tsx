
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Phone, Mail, ArrowRight, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const CTASection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://cdn.pixabay.com/photo/2023/08/14/09/22/alcazar-de-toledo-8189489_960_720.jpg"
          alt="Vista de Toledo desde el autobús"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bus-blue-900/85"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para tu próximo viaje?
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Solicita tu presupuesto gratuito y descubre por qué somos la empresa 
            de confianza en Toledo desde hace más de 50 años.
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <Phone className="h-12 w-12 text-bus-gold-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Llámanos</h3>
              <p className="text-gray-200 mb-3">Atención inmediata</p>
              <p className="text-2xl font-bold text-bus-gold-400">925 123 456</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <Mail className="h-12 w-12 text-bus-gold-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Escríbenos</h3>
              <p className="text-gray-200 mb-3">Respuesta en 24h</p>
              <p className="text-lg text-bus-gold-400">info@autocaresdelrio.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <Clock className="h-12 w-12 text-bus-gold-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Horarios</h3>
              <p className="text-gray-200 mb-3">Lun-Vie: 8:00-20:00</p>
              <p className="text-lg text-bus-gold-400">Sáb: 9:00-14:00</p>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="bg-bus-gold-500 hover:bg-bus-gold-600 text-white">
              <Link href="/presupuesto">
                Solicitar Presupuesto Gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-bus-blue-900">
              <Link href="/contacto">
                Contactar Ahora
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-bus-gold-400">24h</p>
                <p className="text-sm text-gray-300">Respuesta máxima</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-bus-gold-400">100%</p>
                <p className="text-sm text-gray-300">Satisfacción garantizada</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-bus-gold-400">0€</p>
                <p className="text-sm text-gray-300">Presupuesto gratuito</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-bus-gold-400">50+</p>
                <p className="text-sm text-gray-300">Años de experiencia</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
