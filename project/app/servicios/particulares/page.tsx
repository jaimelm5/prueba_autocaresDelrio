
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  UserCheck, 
  Users, 
  MapPin, 
  Calendar, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Star,
  Heart
} from 'lucide-react'

export default function PrivateGroupsPage() {
  const occasions = [
    {
      title: "Excursiones Familiares",
      description: "Viajes perfectos para reuniones familiares y celebraciones especiales",
      icon: Heart,
      examples: ["Reuniones familiares", "Aniversarios", "Cumpleaños especiales", "Excursiones multigeneracionales"]
    },
    {
      title: "Grupos de Amigos",
      description: "Escapadas y aventuras para grupos de amigos de todas las edades",
      icon: Users,
      examples: ["Despedidas de soltero/a", "Viajes de amigos", "Escapadas de fin de semana", "Aventuras grupales"]
    },
    {
      title: "Asociaciones y Clubs",
      description: "Transporte para asociaciones, clubs y grupos organizados",
      icon: UserCheck,
      examples: ["Clubs de jubilados", "Asociaciones culturales", "Grupos de senderismo", "Clubs de lectura"]
    },
    {
      title: "Eventos Especiales",
      description: "Servicios para ocasiones únicas y celebraciones memorables",
      icon: Star,
      examples: ["Comuniones", "Bautizos", "Graduaciones", "Celebraciones religiosas"]
    }
  ]

  const destinations = [
    {
      name: "Parques Temáticos",
      description: "Puy de Fou, Warner, Parque de Atracciones",
      duration: "Día completo",
      price: "Desde 25€/persona"
    },
    {
      name: "Ciudades Históricas",
      description: "Segovia, Ávila, Salamanca, Cáceres",
      duration: "1-2 días",
      price: "Desde 35€/persona"
    },
    {
      name: "Costa Mediterránea",
      description: "Valencia, Alicante, Murcia",
      duration: "2-3 días",
      price: "Desde 55€/persona"
    },
    {
      name: "Portugal",
      description: "Lisboa, Oporto, Óbidos, Sintra",
      duration: "2-4 días",
      price: "Desde 65€/persona"
    },
    {
      name: "Norte de España",
      description: "Asturias, Cantabria, País Vasco",
      duration: "3-5 días",
      price: "Desde 75€/persona"
    },
    {
      name: "Andalucía",
      description: "Sevilla, Córdoba, Granada, Cádiz",
      duration: "3-5 días",
      price: "Desde 70€/persona"
    }
  ]

  const packages = [
    {
      title: "Excursión Básica",
      price: "Desde 200€",
      duration: "Día completo",
      capacity: "Hasta 25 personas",
      features: [
        "Transporte ida y vuelta",
        "Conductor profesional",
        "Seguro de viaje incluido",
        "Flexibilidad en horarios"
      ]
    },
    {
      title: "Viaje Completo",
      price: "Desde 45€/persona",
      duration: "2-3 días",
      capacity: "Hasta 55 personas",
      features: [
        "Transporte durante todo el viaje",
        "Coordinación con hoteles",
        "Guía turístico opcional",
        "Itinerario personalizado",
        "Seguro completo"
      ],
      popular: true
    },
    {
      title: "Experiencia Premium",
      price: "Desde 75€/persona",
      duration: "3+ días",
      capacity: "Hasta 55 personas",
      features: [
        "Autocar de lujo",
        "Guía especializado incluido",
        "Actividades organizadas",
        "Comidas especiales",
        "Recuerdos del viaje",
        "Servicio completo"
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://i.pinimg.com/originals/1f/3c/cc/1f3ccc2c18584c9d62d900035ac98ab3.png"
            alt="Grupos particulares"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <UserCheck className="h-16 w-16 text-indigo-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Grupos Particulares
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Viajes a medida para familias, amigos y grupos especiales. 
            Creamos experiencias únicas adaptadas a tus necesidades.
          </p>
          <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
            <Link href="/presupuesto">
              Planificar Mi Viaje
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ocasiones Especiales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada ocasión es única y merece un viaje especial. 
              Adaptamos nuestros servicios a tu celebración.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {occasions.map((occasion, index) => {
              const Icon = occasion.icon
              return (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">{occasion.title}</h3>
                    <p className="text-gray-600 text-center mb-4">{occasion.description}</p>
                    <div className="space-y-1">
                      {occasion.examples.map((example, idx) => (
                        <div key={idx} className="text-sm text-gray-500 flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                          {example}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Paquetes para Grupos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elige el paquete que mejor se adapte a tu grupo y ocasión
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`card-hover ${pkg.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                {pkg.popular && (
                  <div className="bg-indigo-500 text-white text-center py-2 text-sm font-medium">
                    Más Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <div className="text-3xl font-bold text-indigo-600">{pkg.price}</div>
                  <CardDescription>
                    {pkg.duration} • {pkg.capacity}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700">
                    <Link href="/presupuesto">
                      Solicitar este paquete
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Destinos Populares
            </h2>
            <p className="text-xl text-gray-600">
              Los destinos más solicitados por nuestros grupos particulares
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{destination.name}</span>
                    <span className="text-lg font-bold text-indigo-600">{destination.price}</span>
                  </CardTitle>
                  <CardDescription>{destination.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{destination.duration}</span>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/presupuesto">
                      Más información
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Planning */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Planificación Personalizada
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Cada grupo es único y cada viaje debe serlo también. 
                Trabajamos contigo para crear la experiencia perfecta.
              </p>
              
              <div className="space-y-4">
                {[
                  "Itinerarios completamente personalizados",
                  "Flexibilidad total en horarios y paradas",
                  "Coordinación con restaurantes y hoteles",
                  "Actividades adaptadas al grupo",
                  "Presupuestos ajustados a tus necesidades",
                  "Asesoramiento en destinos y rutas",
                  "Gestión completa del viaje"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://i.pinimg.com/originals/b6/85/f9/b685f9397e6a66dbf9bf81f5033103e4.png"
                alt="Planificación personalizada de viajes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cómo Organizamos Tu Viaje
            </h2>
            <p className="text-xl text-gray-600">
              Un proceso sencillo para crear experiencias extraordinarias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consulta Inicial",
                description: "Nos cuentas tus ideas, fechas y preferencias"
              },
              {
                step: "2",
                title: "Propuesta Personalizada",
                description: "Creamos un itinerario adaptado a tu grupo"
              },
              {
                step: "3",
                title: "Ajustes y Confirmación",
                description: "Refinamos los detalles hasta que sea perfecto"
              },
              {
                step: "4",
                title: "¡A Disfrutar!",
                description: "Nos encargamos de todo para que solo disfrutes"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para planificar tu viaje especial?
          </h2>
          <p className="text-xl mb-8">
            Contacta con nosotros y empezaremos a crear la experiencia perfecta para tu grupo
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <Phone className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Llámanos</h3>
              <p className="text-indigo-100">925 123 456</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <Mail className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Escríbenos</h3>
              <p className="text-indigo-100">grupos@autocaresdelrio.com</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <Calendar className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Planificación</h3>
              <p className="text-indigo-100">Viajes a medida</p>
            </div>
          </div>

          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
            <Link href="/presupuesto">
              Empezar a Planificar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
