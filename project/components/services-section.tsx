
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Heart, 
  Building2, 
  GraduationCap, 
  Trophy, 
  Users2, 
  UserCheck, 
  Castle,
  ArrowRight 
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ServicesSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const services = [
    {
      icon: Heart,
      title: "Bodas y Eventos",
      description: "Tu día especial merece el mejor transporte. Servicios exclusivos para bodas con autobuses decorados y conductores profesionales.",
      image: "https://i.pinimg.com/originals/66/a6/74/66a67496de4cfed89a625b91c46404f1.jpg",
      href: "/servicios/bodas",
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: Castle,
      title: "Excursiones Puy de Fou",
      description: "Especialistas en excursiones al parque temático Puy de Fou. Salidas desde Toledo y Madrid con horarios optimizados.",
      image: "https://i.pinimg.com/originals/2b/ad/32/2bad32e4217bb0905c5ab6cf63f5937f.jpg",
      href: "/servicios/puy-de-fou",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: GraduationCap,
      title: "Transporte Escolar",
      description: "Rutas escolares seguras y discrecionales para colegios. Conductores especializados en transporte de menores.",
      image: "https://c8.alamy.com/comp/2T2650D/group-of-happy-excited-children-boarding-yellow-school-bus-2T2650D.jpg",
      href: "/servicios/colegios",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Building2,
      title: "Administraciones Públicas",
      description: "Servicios de transporte para organismos públicos, ayuntamientos y entidades oficiales con máxima puntualidad.",
      image: "https://i.ytimg.com/vi/niYoAiRmYSA/maxresdefault.jpg",
      href: "/servicios/administraciones",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Trophy,
      title: "Clubes Deportivos",
      description: "Transporte especializado para equipos deportivos y aficionados. Comodidad y puntualidad para eventos deportivos.",
      image: "https://i.ytimg.com/vi/dfuSLnTVEv8/maxresdefault.jpg",
      href: "/servicios/clubes-deportivos",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Users2,
      title: "Viajes IMSERSO",
      description: "Servicios especializados para el programa IMSERSO. Autobuses adaptados y conductores con experiencia en turismo senior.",
      image: "https://media.gettyimages.com/id/184925183/photo/seniors-in-shuttle-bus.jpg?s=1024x1024&w=gi&k=20&c=Bezgybna3zX5yj4ahjxTx-D6hkxJZJsAD7isphwT5pQ=",
      href: "/servicios/imserso",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: UserCheck,
      title: "Grupos Particulares",
      description: "Alquiler de autobuses para grupos particulares, excursiones familiares y viajes organizados a medida.",
      image: "https://i.pinimg.com/originals/6f/42/6c/6f426c67de30a3af3b84f4070a5f13cd.jpg",
      href: "/servicios/particulares",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 50 años de experiencia nos avalan en cada uno de nuestros servicios especializados. 
            Desde Toledo a toda España y Portugal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full card-hover group">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute top-4 left-4 p-3 rounded-full ${service.bgColor}`}>
                      <Icon className={`h-6 w-6 ${service.color}`} />
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <Button asChild variant="outline" className="w-full group-hover:bg-bus-blue-600 group-hover:text-white transition-colors">
                      <Link href={service.href}>
                        Más información
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="bg-bus-blue-600 hover:bg-bus-blue-700">
            <Link href="/presupuesto">
              Solicitar Presupuesto Personalizado
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
