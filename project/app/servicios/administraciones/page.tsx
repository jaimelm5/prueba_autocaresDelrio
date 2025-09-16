
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Building2, 
  Shield, 
  Clock, 
  FileText, 
  Users, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Award
} from 'lucide-react'

export default function PublicAdministrationPage() {
  const services = [
    {
      title: "Ayuntamientos",
      description: "Servicios de transporte para corporaciones municipales y eventos oficiales",
      features: [
        "Transporte para plenos y reuniones",
        "Eventos institucionales",
        "Visitas oficiales",
        "Actividades municipales"
      ]
    },
    {
      title: "Diputaciones",
      description: "Transporte para organismos provinciales y actividades supramunicipales",
      features: [
        "Reuniones provinciales",
        "Eventos culturales",
        "Programas de turismo",
        "Actividades formativas"
      ]
    },
    {
      title: "Organismos Públicos",
      description: "Servicios especializados para entidades y organismos oficiales",
      features: [
        "Centros de salud",
        "Servicios sociales",
        "Centros educativos públicos",
        "Organismos autonómicos"
      ]
    }
  ]

  const advantages = [
    {
      icon: FileText,
      title: "Facturación Adaptada",
      description: "Cumplimos con todos los requisitos de facturación para administraciones públicas"
    },
    {
      icon: Clock,
      title: "Puntualidad Institucional",
      description: "Garantizamos la máxima puntualidad en eventos y actos oficiales"
    },
    {
      icon: Shield,
      title: "Seguros Completos",
      description: "Cobertura total adaptada a las exigencias de las administraciones"
    },
    {
      icon: Award,
      title: "Experiencia Contrastada",
      description: "Más de 50 años trabajando con organismos públicos de Toledo y provincia"
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://i.pinimg.com/736x/3e/53/5d/3e535d6b11bebcb5d39cf8277c50b6e8.jpg"
            alt="Transporte para administraciones públicas"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <Building2 className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Administraciones Públicas
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Servicios de transporte oficial para organismos públicos. 
            Profesionalidad, puntualidad y protocolo institucional.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/presupuesto">
              Solicitar Información Oficial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Especialistas en Sector Público
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conocemos las necesidades específicas de las administraciones públicas 
              y adaptamos nuestros servicios a sus exigencias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon
              return (
                <Card key={index} className="text-center card-hover">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
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
              Servicios Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos servicios adaptados a cada tipo de organismo público
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
                Cumplimos con todos los requisitos legales y administrativos 
                exigidos para trabajar con organismos públicos.
              </p>
              
              <div className="space-y-4">
                {[
                  "Registro de empresas proveedoras",
                  "Certificados de estar al corriente de obligaciones",
                  "Seguros de responsabilidad civil específicos",
                  "Facturación electrónica (FACe)",
                  "Cumplimiento de la Ley de Contratos del Sector Público",
                  "Personal uniformado y identificado",
                  "Protocolos de seguridad institucional"
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
                src="https://i.pinimg.com/originals/46/02/9b/46029b21becec390bcd95e57996c170b.jpg"
                alt="Conductor oficial para administraciones"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experiencia Contrastada
            </h2>
            <p className="text-xl text-gray-600">
              Más de 50 años colaborando con administraciones públicas de Toledo y provincia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                <h3 className="text-xl font-semibold mb-2">Ayuntamientos</h3>
                <p className="text-gray-600">Colaboramos regularmente con más de 25 ayuntamientos</p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <h3 className="text-xl font-semibold mb-2">Eventos Oficiales</h3>
                <p className="text-gray-600">Servicios realizados para actos institucionales</p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <h3 className="text-xl font-semibold mb-2">Cumplimiento</h3>
                <p className="text-gray-600">Puntualidad garantizada en eventos oficiales</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Necesita servicios de transporte oficial?
          </h2>
          <p className="text-xl mb-8">
            Contacte con nosotros para recibir información detallada sobre nuestros servicios 
            para administraciones públicas
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <Phone className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Teléfono Oficial</h3>
              <p className="text-blue-100">925 123 456</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <Mail className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Institucional</h3>
              <p className="text-blue-100">institucional@autocaresdelrio.com</p>
            </div>
          </div>

          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            <Link href="/presupuesto">
              Solicitar Presupuesto Oficial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
