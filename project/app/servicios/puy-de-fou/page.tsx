
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Castle, 
  Clock, 
  MapPin, 
  Users, 
  Star, 
  CheckCircle,
  ArrowRight,
  Calendar,
  Ticket
} from 'lucide-react'

export default function PuyDeFouPage() {
  const packages = [
    {
      title: "Excursión Básica",
      price: "Desde 25€/persona",
      duration: "Día completo",
      departure: "Toledo 8:00h",
      features: [
        "Transporte ida y vuelta",
        "Salida desde Toledo centro",
        "Conductor profesional",
        "Seguro de viaje incluido"
      ]
    },
    {
      title: "Paquete Completo",
      price: "Desde 45€/persona",
      duration: "Día completo",
      departure: "Toledo/Madrid",
      features: [
        "Transporte ida y vuelta",
        "Entrada al parque incluida",
        "Salidas desde Toledo y Madrid",
        "Guía acompañante",
        "Seguro completo"
      ],
      popular: true
    },
    {
      title: "Excursión Premium",
      price: "Desde 65€/persona",
      duration: "Día completo + cena",
      departure: "Toledo/Madrid",
      features: [
        "Transporte de lujo",
        "Entrada al parque incluida",
        "Cena en restaurante temático",
        "Guía especializado",
        "Recuerdos incluidos",
        "Asientos reservados en shows"
      ]
    }
  ]

  const shows = [
    {
      name: "El Sueño de Toledo",
      time: "Varios pases",
      description: "Espectáculo nocturno sobre la historia de Toledo"
    },
    {
      name: "El Último Cantar",
      time: "Tarde",
      description: "La leyenda del Cid Campeador"
    },
    {
      name: "Allende la Mar Océana",
      time: "Mediodía",
      description: "El descubrimiento de América"
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/AUTOBUS_4.jpg"
            alt="Autobús Del Río en excursión al Valle de los Caídos"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <Castle className="h-16 w-16 text-purple-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Excursiones a Puy de Fou
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Descubre el parque temático más espectacular de España. 
            Especialistas en excursiones desde Toledo con más de 50 años de experiencia.
          </p>
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Link href="/presupuesto">
              Reservar Excursión
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Especialistas en Puy de Fou
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conocemos cada detalle del parque y organizamos tu visita para que 
              no te pierdas ningún espectáculo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Horarios Optimizados",
                description: "Llegada perfecta para todos los shows principales"
              },
              {
                icon: MapPin,
                title: "Conocimiento Local",
                description: "Rutas optimizadas desde Toledo y Madrid"
              },
              {
                icon: Users,
                title: "Grupos Organizados",
                description: "Desde familias hasta grupos de 55 personas"
              },
              {
                icon: Star,
                title: "Experiencia Única",
                description: "Más de 1000 excursiones realizadas al parque"
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="text-center card-hover">
                  <CardContent className="p-6">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
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
              Paquetes de Excursión
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elige la opción que mejor se adapte a tu grupo. 
              Todos incluyen transporte cómodo y seguro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`card-hover ${pkg.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {pkg.popular && (
                  <div className="bg-purple-500 text-white text-center py-2 text-sm font-medium">
                    Más Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <div className="text-3xl font-bold text-purple-600">{pkg.price}</div>
                  <CardDescription>
                    {pkg.duration} • {pkg.departure}
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
                  <Button asChild className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
                    <Link href="/presupuesto">
                      Reservar paquete
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shows Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Espectáculos Principales
            </h2>
            <p className="text-xl text-gray-600">
              Los shows más impresionantes que no puedes perderte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shows.map((show, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Ticket className="h-5 w-5 text-purple-600 mr-2" />
                    {show.name}
                  </CardTitle>
                  <CardDescription className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {show.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{show.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Information */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Calendar className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">
            Horarios y Salidas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Desde Toledo</h3>
              <div className="space-y-2">
                <p><strong>Salida:</strong> 8:00h - Plaza de Zocodover</p>
                <p><strong>Regreso:</strong> 22:30h (aprox.)</p>
                <p><strong>Duración viaje:</strong> 1h 15min</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Desde Madrid</h3>
              <div className="space-y-2">
                <p><strong>Salida:</strong> 8:30h - Estación Sur</p>
                <p><strong>Regreso:</strong> 23:00h (aprox.)</p>
                <p><strong>Duración viaje:</strong> 45 minutos</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Temporadas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><strong>Temporada Alta:</strong> Abril - Octubre</p>
                <p>Salidas: Viernes, Sábados y Domingos</p>
              </div>
              <div>
                <p><strong>Temporada Baja:</strong> Noviembre - Marzo</p>
                <p>Salidas: Sábados (consultar disponibilidad)</p>
              </div>
            </div>
          </div>

          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
            <Link href="/presupuesto">
              Consultar Disponibilidad
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
