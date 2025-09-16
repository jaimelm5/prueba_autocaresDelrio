
'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Shield, 
  Clock, 
  Award, 
  Users, 
  Wrench, 
  Heart,
  CheckCircle 
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedCounter from './animated-counter'

const WhyChooseUsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const features = [
    {
      icon: Award,
      title: "50+ Años de Experiencia",
      description: "Desde 1970 ofreciendo servicios de transporte de calidad en Toledo y toda España."
    },
    {
      icon: Shield,
      title: "Máxima Seguridad",
      description: "Flota moderna con todos los sistemas de seguridad y conductores profesionales certificados."
    },
    {
      icon: Clock,
      title: "Puntualidad Garantizada",
      description: "Cumplimos con los horarios establecidos para que tu evento o viaje sea perfecto."
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description: "Cada cliente es único. Adaptamos nuestros servicios a tus necesidades específicas."
    },
    {
      icon: Wrench,
      title: "Flota Moderna",
      description: "Autobuses equipados con aire acondicionado, asientos cómodos y tecnología actual."
    },
    {
      icon: Heart,
      title: "Compromiso Local",
      description: "Empresa toledana comprometida con nuestra ciudad y la satisfacción de nuestros clientes."
    }
  ]

  const stats = [
    { number: 50, suffix: "+", label: "Años de experiencia" },
    { number: 10, suffix: "", label: "Autobuses en flota" },
    { number: 1000, suffix: "+", label: "Servicios anuales" },
    { number: 100, suffix: "%", label: "Clientes satisfechos" }
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-bus-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir <span className="text-gradient">Autobuses del Río</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de cinco décadas de experiencia nos avalan como la empresa de confianza 
            para tu transporte en Toledo y toda España.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-bus-blue-600 mb-2">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full card-hover text-center">
                  <CardContent className="p-6">
                    <div className="bg-bus-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-bus-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Company Image and Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="https://thumbs.dreamstime.com/z/professional-driver-standing-near-bus-passenger-transportation-130299519.jpg"
              alt="Conductor profesional de Autobuses del Río"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Tradición y modernidad al servicio del cliente
            </h3>
            <p className="text-lg text-gray-600">
              Desde 1970, Autobuses del Río ha sido sinónimo de calidad y confianza en Toledo. 
              Hemos evolucionado manteniendo nuestros valores familiares y añadiendo la tecnología 
              más moderna para ofrecer el mejor servicio.
            </p>
            
            <div className="space-y-3">
              {[
                "Conductores profesionales con más de 10 años de experiencia",
                "Flota renovada cada 5 años para máxima seguridad",
                "Seguros completos y certificaciones oficiales",
                "Atención 24/7 durante el servicio"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
