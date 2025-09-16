
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Trophy, 
  Users, 
  Clock, 
  MapPin, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Calendar
} from 'lucide-react'

export default function SportsClubsPage() {
  const services = [
    {
      title: "Equipos Profesionales",
      description: "Transporte especializado para equipos profesionales y semiprofesionales",
      features: [
        "Espacio para equipamiento deportivo",
        "Horarios adaptados a entrenamientos",
        "Rutas a campos de juego",
        "Servicios para competiciones"
      ]
    },
    {
      title: "Equipos Base y Juveniles",
      description: "Servicios adaptados para categorías inferiores y equipos juveniles",
      features: [
        "Transporte seguro para menores",
        "Acompañamiento especializado",
        "Rutas a torneos y competiciones",
        "Precios especiales para clubes"
      ]
    },
    {
      title: "Aficionados y Peñas",
      description: "Transporte para seguidores y desplazamientos de aficionados",
      features: [
        "Grupos grandes de aficionados",
        "Rutas a estadios y pabellones",
        "Ambiente festivo y seguro",
        "Precios de grupo competitivos"
      ]
    }
  ]

  const sports = [
    {
      name: "Fútbol",
      description: "Equipos de todas las categorías",
      icon: "⚽"
    },
    {
      name: "Baloncesto",
      description: "Clubes y equipos escolares",
      icon: "🏀"
    },
    {
      name: "Balonmano",
      description: "Competiciones regionales y nacionales",
      icon: "🤾"
    },
    {
      name: "Voleibol",
      description: "Equipos federados y amateur",
      icon: "🏐"
    },
    {
      name: "Atletismo",
      description: "Clubs y escuelas de atletismo",
      icon: "🏃"
    },
    {
      name: "Otros Deportes",
      description: "Cualquier disciplina deportiva",
      icon: "🏆"
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://i.ytimg.com/vi/dfuSLnTVEv8/maxresdefault.jpg"
            alt="Transporte para clubes deportivos"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <Trophy className="h-16 w-16 text-green-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Clubes Deportivos
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Transporte especializado para equipos deportivos y aficionados. 
            Llevamos el deporte toledano por toda España.
          </p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/presupuesto">
              Solicitar Presupuesto Deportivo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Sports We Serve */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Deportes que Transportamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trabajamos con clubes de todas las disciplinas deportivas, 
              adaptando nuestros servicios a las necesidades específicas de cada deporte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sports.map((sport, index) => (
              <Card key={index} className="text-center card-hover">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{sport.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{sport.name}</h3>
                  <p className="text-gray-600">{sport.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Servicios Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Adaptamos nuestros servicios a las necesidades específicas de cada club y deporte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ventajas para Clubes Deportivos
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Entendemos las necesidades específicas del mundo deportivo y 
                ofrecemos soluciones adaptadas a cada situación.
              </p>
              
              <div className="space-y-4">
                {[
                  "Espacio amplio para equipamiento deportivo",
                  "Horarios flexibles adaptados a entrenamientos",
                  "Descuentos especiales para temporadas completas",
                  "Conductores familiarizados con instalaciones deportivas",
                  "Seguimiento de competiciones y calendarios",
                  "Servicios de última hora para cambios de horario",
                  "Ambiente adecuado para concentración pre-partido"
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
                src="https://c8.alamy.com/comp/R0NM2E/football-team-celebrating-victory-R0NM2E.jpg"
                alt="Equipo deportivo celebrando"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tarifas Especiales para Clubes
            </h2>
            <p className="text-xl text-gray-600">
              Ofrecemos precios competitivos y descuentos por fidelidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Servicios Puntuales</CardTitle>
                <div className="text-3xl font-bold text-green-600">Desde 150€</div>
                <CardDescription>Por desplazamiento</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Partidos puntuales</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Torneos especiales</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Eventos deportivos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover ring-2 ring-green-500">
              <div className="bg-green-500 text-white text-center py-2 text-sm font-medium">
                Más Popular
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Temporada Completa</CardTitle>
                <div className="text-3xl font-bold text-green-600">Descuento 20%</div>
                <CardDescription>Contrato anual</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Todos los partidos de liga</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Entrenamientos especiales</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Prioridad en reservas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Aficionados</CardTitle>
                <div className="text-3xl font-bold text-green-600">Desde 25€</div>
                <CardDescription>Por persona</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Grupos de aficionados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Partidos importantes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Ambiente festivo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Tu club necesita transporte?
          </h2>
          <p className="text-xl mb-8">
            Contacta con nosotros y te ayudaremos a organizar el transporte perfecto 
            para tu equipo o grupo de aficionados
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <Phone className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Llámanos</h3>
              <p className="text-green-100">925 123 456</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <Mail className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Deportivo</h3>
              <p className="text-green-100">deportes@autocaresdelrio.com</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <Calendar className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Planificación</h3>
              <p className="text-green-100">Temporadas completas</p>
            </div>
          </div>

          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
            <Link href="/presupuesto">
              Solicitar Presupuesto Deportivo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
