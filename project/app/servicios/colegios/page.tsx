
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  GraduationCap, 
  Shield, 
  Clock, 
  Users, 
  MapPin, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Bus
} from 'lucide-react'

export default function SchoolTransportPage() {
  const services = [
    {
      title: "Rutas Escolares Regulares",
      description: "Transporte diario para estudiantes con rutas fijas y horarios establecidos",
      features: [
        "Rutas optimizadas y seguras",
        "Horarios puntuales adaptados al centro",
        "Conductores especializados en menores",
        "Seguimiento GPS en tiempo real"
      ]
    },
    {
      title: "Servicios Discrecionales",
      description: "Transporte para excursiones, viajes de estudios y actividades especiales",
      features: [
        "Excursiones educativas",
        "Viajes de fin de curso",
        "Actividades deportivas",
        "Visitas culturales"
      ]
    },
    {
      title: "Transporte Universitario",
      description: "Servicios especializados para universidades y centros de educación superior",
      features: [
        "Rutas intercampus",
        "Transporte para prácticas",
        "Viajes de estudios internacionales",
        "Eventos académicos"
      ]
    }
  ]

  const safety = [
    {
      icon: Shield,
      title: "Máxima Seguridad",
      description: "Sistemas de seguridad avanzados y conductores certificados para transporte escolar"
    },
    {
      icon: Users,
      title: "Personal Especializado",
      description: "Conductores con formación específica en transporte de menores y primeros auxilios"
    },
    {
      icon: Clock,
      title: "Puntualidad Garantizada",
      description: "Horarios estrictos para no interferir con la actividad académica"
    },
    {
      icon: MapPin,
      title: "Rutas Optimizadas",
      description: "Recorridos seguros y eficientes adaptados a cada centro educativo"
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://thumbs.dreamstime.com/b/group-happy-excited-children-boarding-yellow-school-bus-group-happy-excited-children-boarding-yellow-school-bus-diverse-kids-293805014.jpg"
            alt="Transporte escolar seguro"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <GraduationCap className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transporte Escolar
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Seguridad, puntualidad y confianza en el transporte de estudiantes. 
            Más de 50 años cuidando de la educación en Toledo.
          </p>
          <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-700">
            <Link href="/presupuesto">
              Solicitar Información
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seguridad y Confianza
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La seguridad de los estudiantes es nuestra máxima prioridad. 
              Cumplimos con todas las normativas y superamos los estándares exigidos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safety.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="text-center card-hover">
                  <CardContent className="p-6">
                    <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios Educativos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Adaptamos nuestros servicios a las necesidades específicas de cada centro educativo
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

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Cumplimiento Normativo
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Cumplimos estrictamente con toda la normativa vigente para transporte escolar, 
                garantizando la máxima seguridad y tranquilidad para familias y centros educativos.
              </p>
              
              <div className="space-y-4">
                {[
                  "Conductores con certificado de aptitud profesional (CAP)",
                  "Formación específica en transporte de menores",
                  "Revisiones técnicas cada 6 meses",
                  "Seguros específicos para transporte escolar",
                  "Sistemas de retención infantil homologados",
                  "Acompañante en rutas de educación infantil",
                  "Protocolo de emergencias y primeros auxilios"
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
                src="https://i.ytimg.com/vi/TSZmZLSEIzU/hqdefault.jpg"
                alt="Conductor profesional de transporte escolar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Flota Especializada
            </h2>
            <p className="text-xl text-gray-600">
              Vehículos específicamente adaptados para el transporte escolar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <Bus className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Minibuses</h3>
                <p className="text-gray-600 mb-4">15-25 plazas para rutas pequeñas</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Sistemas de retención</li>
                  <li>• Puertas de emergencia</li>
                  <li>• Señalización específica</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <Bus className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Autobuses Medianos</h3>
                <p className="text-gray-600 mb-4">35-45 plazas para rutas regulares</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cinturones de seguridad</li>
                  <li>• Cámaras de vigilancia</li>
                  <li>• GPS tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <Bus className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Autocares</h3>
                <p className="text-gray-600 mb-4">55 plazas para excursiones</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Aire acondicionado</li>
                  <li>• Asientos reclinables</li>
                  <li>• Espacio para equipaje</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Necesitas transporte escolar?
          </h2>
          <p className="text-xl mb-8">
            Contacta con nosotros y te ayudaremos a organizar el transporte perfecto para tu centro educativo
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <Phone className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Llámanos</h3>
              <p className="text-yellow-100">925 123 456</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <Mail className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Escríbenos</h3>
              <p className="text-yellow-100">colegios@autocaresdelrio.com</p>
            </div>
          </div>

          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-600">
            <Link href="/presupuesto">
              Solicitar Presupuesto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
