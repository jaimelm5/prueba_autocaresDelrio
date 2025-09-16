
import Header from '@/components/header'
import Footer from '@/components/footer'
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
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Heart,
      title: "Bodas y Eventos",
      description: "Servicios exclusivos para el día más importante de tu vida",
      image: "https://i.pinimg.com/originals/b0/da/98/b0da98555d43d0b906bee4e9fbe9dc2f.jpg",
      href: "/servicios/bodas",
      features: [
        "Autobuses decorados especialmente",
        "Conductores con traje de gala",
        "Servicio de recogida personalizado",
        "Coordinación con wedding planners"
      ],
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: Castle,
      title: "Excursiones Puy de Fou",
      description: "Especialistas en el parque temático más espectacular de España",
      image: "https://i.pinimg.com/originals/26/d4/74/26d4746400379e54676b97f4d13f752a.jpg",
      href: "/servicios/puy-de-fou",
      features: [
        "Horarios optimizados para shows",
        "Guías especializados disponibles",
        "Paquetes completos con entradas",
        "Salidas desde Toledo y Madrid"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: GraduationCap,
      title: "Transporte Escolar",
      description: "Seguridad y puntualidad para el transporte de estudiantes",
      image: "https://thumbs.dreamstime.com/b/friendly-teacher-lady-fist-bumping-kids-as-boarding-school-bus-black-attendant-yellow-diverse-multiethnic-pupils-feeling-293550289.jpg",
      href: "/servicios/colegios",
      features: [
        "Conductores especializados en menores",
        "Sistemas de seguridad avanzados",
        "Rutas regulares y discrecionales",
        "Seguimiento GPS en tiempo real"
      ],
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Building2,
      title: "Administraciones Públicas",
      description: "Servicios oficiales para organismos públicos y ayuntamientos",
      image: "https://i.ytimg.com/vi/niYoAiRmYSA/maxresdefault.jpg",
      href: "/servicios/administraciones",
      features: [
        "Contratos con administraciones",
        "Facturación adaptada a normativas",
        "Puntualidad garantizada",
        "Conductores uniformados"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Trophy,
      title: "Clubes Deportivos",
      description: "Transporte especializado para equipos y aficionados",
      image: "https://i.pinimg.com/originals/25/96/c5/2596c5ce1208697eb2d14e2807723c1a.jpg",
      href: "/servicios/clubes-deportivos",
      features: [
        "Espacio para equipamiento deportivo",
        "Horarios flexibles para entrenamientos",
        "Descuentos para temporadas completas",
        "Seguimiento de competiciones"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Users2,
      title: "Viajes IMSERSO",
      description: "Servicios especializados para el programa de turismo senior",
      image: "https://thumbs.dreamstime.com/b/close-up-open-roof-coach-bus-full-tourist-passengers-ride-excursion-sunset-enjoy-scenic-panorama-mountains-landscape-bus-321208555.jpg",
      href: "/servicios/imserso",
      features: [
        "Autobuses adaptados para seniors",
        "Conductores con experiencia en turismo",
        "Paradas frecuentes y cómodas",
        "Coordinación con hoteles"
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: UserCheck,
      title: "Grupos Particulares",
      description: "Alquiler flexible para excursiones familiares y grupos",
      image: "https://i.pinimg.com/originals/1f/3c/cc/1f3ccc2c18584c9d62d900035ac98ab3.png",
      href: "/servicios/particulares",
      features: [
        "Rutas personalizadas",
        "Precios competitivos para grupos",
        "Flexibilidad en horarios",
        "Asesoramiento en destinos"
      ],
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-bus-blue-600 to-bus-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Más de 50 años de experiencia ofreciendo servicios de transporte especializados 
            para cada necesidad. Desde Toledo a toda España y Portugal.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="card-hover group overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-64 md:h-full">
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
                    
                    <div className="p-6">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-gray-600">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="p-0">
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <Button asChild className="w-full group-hover:bg-bus-blue-600 group-hover:text-white transition-colors">
                          <Link href={service.href}>
                            Más información
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿No encuentras el servicio que necesitas?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Contacta con nosotros y te ayudaremos a encontrar la solución perfecta para tu transporte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-bus-blue-600 hover:bg-bus-blue-700">
                <Link href="/presupuesto">
                  Solicitar Presupuesto Personalizado
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contacto">
                  Contactar Directamente
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
