
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Calendar, 
  Users, 
  Award, 
  Shield, 
  Heart, 
  Target,
  CheckCircle,
  ArrowRight,
  Bus,
  MapPin
} from 'lucide-react'
import AnimatedCounter from '@/components/animated-counter'

export default function CompanyPage() {
  const timeline = [
    {
      year: "1970",
      title: "Fundación de la empresa",
      description: "Inicio de actividades en Toledo con el primer autobús familiar"
    },
    {
      year: "1985",
      title: "Expansión de la flota",
      description: "Incorporación de nuevos vehículos y servicios regulares"
    },
    {
      year: "1995",
      title: "Servicios especializados",
      description: "Inicio de servicios para bodas y eventos especiales"
    },
    {
      year: "2005",
      title: "Modernización tecnológica",
      description: "Renovación completa de la flota con tecnología avanzada"
    },
    {
      year: "2015",
      title: "Especialización Puy de Fou",
      description: "Convenio exclusivo para excursiones al parque temático"
    },
    {
      year: "2025",
      title: "Más de 50 años",
      description: "Consolidación como referente en transporte de Toledo"
    }
  ]

  const values = [
    {
      icon: Heart,
      title: "Compromiso Familiar",
      description: "Empresa familiar que trata a cada cliente como parte de la familia"
    },
    {
      icon: Shield,
      title: "Seguridad Máxima",
      description: "La seguridad de nuestros pasajeros es nuestra prioridad absoluta"
    },
    {
      icon: Award,
      title: "Excelencia en el Servicio",
      description: "Más de 50 años perfeccionando cada detalle del transporte"
    },
    {
      icon: Target,
      title: "Orientación al Cliente",
      description: "Adaptamos nuestros servicios a las necesidades específicas de cada cliente"
    }
  ]

  const team = [
    {
      name: "José María del Río",
      position: "Director General",
      experience: "45 años en el sector",
      description: "Fundador y alma de la empresa, experto en transporte de grupos"
    },
    {
      name: "Carmen Martínez",
      position: "Directora de Operaciones",
      experience: "25 años en la empresa",
      description: "Especialista en coordinación de servicios y atención al cliente"
    },
    {
      name: "Miguel del Río",
      position: "Jefe de Flota",
      experience: "20 años de experiencia",
      description: "Responsable del mantenimiento y modernización de vehículos"
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://i.ytimg.com/vi/-RTJ4akc3YI/maxresdefault.jpg"
            alt="Historia de Autobuses del Río"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <Calendar className="h-16 w-16 text-bus-gold-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nuestra Historia
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Más de 50 años conectando Toledo con España y Portugal. 
            Una historia familiar de compromiso, calidad y servicio.
          </p>
          <div className="text-6xl font-bold text-bus-gold-400 mb-4">
            <AnimatedCounter end={1970} />
          </div>
          <p className="text-xl text-gray-200">Año de fundación</p>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-bus-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-bus-gold-400 mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <p className="text-lg">Años de experiencia</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-bus-gold-400 mb-2">
                <AnimatedCounter end={10} />
              </div>
              <p className="text-lg">Autobuses en flota</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-bus-gold-400 mb-2">
                <AnimatedCounter end={25000} suffix="+" />
              </div>
              <p className="text-lg">Clientes satisfechos</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-bus-gold-400 mb-2">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <p className="text-lg">Compromiso calidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestra <span className="text-gradient">Trayectoria</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más de cinco décadas de evolución constante, siempre manteniendo 
              nuestros valores familiares y el compromiso con la excelencia.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-bus-blue-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <div className="text-3xl font-bold text-bus-blue-600 mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 w-4 h-4 bg-bus-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestros <span className="text-gradient">Valores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que nos han guiado durante más de 50 años y que 
              seguirán siendo la base de nuestro servicio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center card-hover">
                  <CardContent className="p-6">
                    <div className="bg-bus-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-bus-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestro <span className="text-gradient">Equipo</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un equipo familiar con décadas de experiencia en el sector del transporte, 
              comprometido con la excelencia en cada servicio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center card-hover">
                <CardContent className="p-6">
                  <div className="bg-bus-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-bus-blue-600 font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-gray-500 mb-3">{member.experience}</p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nuestra <span className="text-gradient">Flota</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Mantenemos una flota moderna y segura, renovada constantemente para 
                ofrecer el máximo confort y seguridad a nuestros pasajeros.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "10 autobuses de diferentes capacidades (8-55 plazas)",
                  "Vehículos con menos de 8 años de antigüedad",
                  "Sistemas de seguridad avanzados en todos los vehículos",
                  "Aire acondicionado y asientos ergonómicos",
                  "Mantenimiento preventivo cada 10.000 km",
                  "Seguros completos y certificaciones oficiales"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-bus-blue-600 hover:bg-bus-blue-700">
                <Link href="/presupuesto">
                  Solicitar Información
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://img.freepik.com/premium-photo/fleet-buses-parked-parking-lot-yard-delivery-company_1104566-239.jpg"
                alt="Flota de Autobuses del Río"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20 bg-bus-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <MapPin className="h-16 w-16 mx-auto mb-6 text-bus-gold-400" />
          <h2 className="text-4xl font-bold mb-6">Zona de Cobertura</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Desde nuestras bases en Toledo, ofrecemos servicios de transporte 
            a toda España y Portugal, con especial experiencia en rutas turísticas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-lg p-6">
              <Bus className="h-12 w-12 mx-auto mb-4 text-bus-gold-400" />
              <h3 className="text-xl font-semibold mb-2">Base Principal</h3>
              <p className="text-gray-200">Toledo - Centro histórico</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-bus-gold-400" />
              <h3 className="text-xl font-semibold mb-2">Cobertura Nacional</h3>
              <p className="text-gray-200">Toda España - Principales ciudades</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <Target className="h-12 w-12 mx-auto mb-4 text-bus-gold-400" />
              <h3 className="text-xl font-semibold mb-2">Internacional</h3>
              <p className="text-gray-200">Portugal - Lisboa y Oporto</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            ¿Quieres formar parte de nuestra historia?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Únete a los miles de clientes que han confiado en nosotros durante más de 50 años
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-bus-blue-600 hover:bg-bus-blue-700">
              <Link href="/presupuesto">
                Solicitar Presupuesto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contacto">
                Contactar con Nosotros
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
