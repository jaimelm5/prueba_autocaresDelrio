
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const DestinationsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const destinations = [
    {
      name: "Puy de Fou",
      location: "Toledo",
      duration: "Día completo",
      capacity: "Hasta 55 personas",
      image: "https://i.pinimg.com/originals/25/8e/0e/258e0e48fa67553c477ef8c5a5250ea0.jpg",
      description: "El espectacular parque temático con los mejores shows de España",
      popular: true
    },
    {
      name: "Madrid",
      location: "Desde Toledo",
      duration: "1-2 horas",
      capacity: "Grupos flexibles",
      image: "https://cdn.pixabay.com/photo/2018/06/06/21/10/royal-palace-3458815_1280.jpg",
      description: "Conexiones regulares a la capital y aeropuerto de Barajas"
    },
    {
      name: "Sevilla",
      location: "Andalucía",
      duration: "4-5 horas",
      capacity: "Hasta 55 personas",
      image: "https://c8.alamy.com/comp/FD3YYB/giralda-the-bell-tower-of-the-cathedral-of-seville-and-orange-trees-FD3YYB.jpg",
      description: "La perla de Andalucía con su impresionante patrimonio"
    },
    {
      name: "Santiago de Compostela",
      location: "Galicia",
      duration: "6-7 horas",
      capacity: "Hasta 55 personas",
      image: "https://c8.alamy.com/comp/JKYPMH/cathedral-mass-of-the-pilgrim-santiago-de-compostelacorua-provincespain-JKYPMH.jpg",
      description: "Destino de peregrinación y patrimonio mundial"
    },
    {
      name: "Lisboa",
      location: "Portugal",
      duration: "5-6 horas",
      capacity: "Hasta 55 personas",
      image: "https://c8.alamy.com/comp/RFWMK2/tram-tracks-and-colorful-buildings-in-alfama-lisbon-portugal-RFWMK2.jpg",
      description: "La encantadora capital portuguesa"
    },
    {
      name: "Oporto",
      location: "Portugal",
      duration: "6-7 horas",
      capacity: "Hasta 55 personas",
      image: "https://c8.alamy.com/comp/2XKYX22/colorful-facades-and-roofs-of-houses-in-porto-and-the-dom-luis-bridge-it-is-a-popular-tourist-attraction-of-portugal-2XKYX22.jpg",
      description: "Ciudad patrimonio mundial famosa por sus vinos"
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Destinos <span className="text-gradient">Destacados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde Toledo te llevamos a los mejores destinos de España y Portugal. 
            Descubre lugares únicos con la comodidad y seguridad de nuestros autobuses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover group overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {destination.popular && (
                    <div className="absolute top-4 right-4 bg-bus-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{destination.name}</h3>
                    <p className="text-sm text-gray-200">{destination.location}</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{destination.capacity}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Salida desde Toledo</span>
                    </div>
                  </div>
                  
                  <Button asChild variant="outline" className="w-full group-hover:bg-bus-blue-600 group-hover:text-white transition-colors">
                    <Link href="/presupuesto">
                      Solicitar información
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            ¿No encuentras tu destino? Organizamos viajes a cualquier lugar de España y Portugal
          </p>
          <Button asChild size="lg" className="bg-bus-blue-600 hover:bg-bus-blue-700">
            <Link href="/destinos">
              Ver Todos los Destinos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default DestinationsSection
