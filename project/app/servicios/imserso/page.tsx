
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Users2, 
  Heart, 
  Shield, 
  MapPin, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Star
} from 'lucide-react'

export default function ImsersoPage() {
  const destinations = [
    {
      name: "Costa del Sol",
      region: "Málaga",
      duration: "7 días",
      highlights: ["Playas", "Clima mediterráneo", "Gastronomía andaluza"]
    },
    {
      name: "Costa Brava",
      region: "Girona",
      duration: "7 días",
      highlights: ["Pueblos costeros", "Calas cristalinas", "Cultura catalana"]
    },
    {
      name: "Galicia",
      region: "Santiago - Rías Baixas",
      duration: "8 días",
      highlights: ["Santiago de Compostela", "Rías gallegas", "Marisco fresco"]
    },
    {
      name: "Asturias",
      region: "Oviedo - Gijón",
      duration: "7 días",
      highlights: ["Picos de Europa", "Sidra asturiana", "Patrimonio histórico"]
    },
    {
      name: "Cantabria",
      region: "Santander",
      duration: "6 días",
      highlights: ["Playas del Sardinero", "Cuevas de Altamira", "Naturaleza"]
    },
    {
      name: "Levante",
      region: "Valencia - Alicante",
      duration: "7 días",
      highlights: ["Ciudad de las Artes", "Benidorm", "Paella valenciana"]
    }
  ]

  const services = [
    {
      title: "Transporte Adaptado",
      description: "Autobuses especialmente acondicionados para personas mayores",
      features: [
        "Asientos ergonómicos y cómodos",
        "Acceso fácil con escalones bajos",
        "Aire acondicionado regulado",
        "Espacio amplio para equipaje"
      ]
    },
    {
      title: "Conductores Especializados",
      description: "Personal con experiencia en turismo senior y atención especializada",
      features: [
        "Formación en atención a mayores",
        "Conocimiento de rutas turísticas",
        "Paciencia y trato personalizado",
        "Primeros auxilios básicos"
      ]
    },
    {
      title: "Servicios Adicionales",
      description: "Complementos que hacen el viaje más cómodo y seguro",
      features: [
        "Paradas frecuentes y programadas",
        "Coordinación con hoteles",
        "Asistencia durante el viaje",
        "Información turística"
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
            src="https://thumbs.dreamstime.com/b/close-up-open-roof-coach-bus-full-tourist-passengers-ride-excursion-sunset-enjoy-scenic-panorama-mountains-landscape-bus-321208555.jpg"
            alt="Viajes IMSERSO"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <Users2 className="h-16 w-16 text-orange-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Viajes IMSERSO
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Especialistas en turismo senior. Más de 50 años haciendo realidad 
            los viajes de nuestros mayores con comodidad y seguridad.
          </p>
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
            <Link href="/presupuesto">
              Información sobre Viajes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Especialistas en Turismo Senior
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entendemos las necesidades específicas de las personas mayores y 
              adaptamos nuestros servicios para garantizar viajes cómodos y seguros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Atención Personalizada",
                description: "Trato cercano y familiar adaptado a cada viajero"
              },
              {
                icon: Shield,
                title: "Máxima Seguridad",
                description: "Conductores especializados y vehículos adaptados"
              },
              {
                icon: Clock,
                title: "Ritmo Relajado",
                description: "Horarios cómodos con paradas frecuentes"
              },
              {
                icon: Star,
                title: "Experiencia Contrastada",
                description: "Más de 30 años organizando viajes IMSERSO"
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="text-center card-hover">
                  <CardContent className="p-6">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-orange-600" />
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

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Servicios Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todo pensado para que disfrutes de tu viaje con total tranquilidad
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

      {/* Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Destinos Populares IMSERSO
            </h2>
            <p className="text-xl text-gray-600">
              Los destinos más solicitados para viajes de turismo senior
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{destination.name}</span>
                    <span className="text-sm bg-orange-100 text-orange-700 px-2 py-1 rounded">
                      {destination.duration}
                    </span>
                  </CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {destination.region}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-900">Destacados:</h4>
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.map((highlight, idx) => (
                        <span key={idx} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comfort Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comodidad y Bienestar
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nuestros autobuses están especialmente adaptados para garantizar 
                el máximo confort durante todo el viaje.
              </p>
              
              <div className="space-y-4">
                {[
                  "Asientos ergonómicos con respaldo reclinable",
                  "Espacio amplio entre filas para mayor comodidad",
                  "Aire acondicionado con control de temperatura",
                  "Acceso fácil con escalones antideslizantes",
                  "Baño adaptado a bordo en viajes largos",
                  "Iluminación suave y ambiente relajado",
                  "Música ambiental y entretenimiento opcional"
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
                src="https://thumbs.dreamstime.com/b/comfortable-passenger-bus-interior-upholstered-seats-bus-travel-long-transportation-comfort-safety-passengers-263848403.jpg"
                alt="Interior cómodo para viajes IMSERSO"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros viajeros
            </h2>
            <p className="text-xl text-gray-600">
              Testimonios reales de personas que han viajado con nosotros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Excelente servicio. El conductor fue muy atento y el autobús muy cómodo. 
                  Hicimos paradas cuando lo necesitamos y llegamos descansados a nuestro destino."
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Carmen M.</strong> • Viaje a Costa del Sol • Octubre 2024
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Llevamos años viajando con Autobuses del Río y siempre nos tratan como familia. 
                  Son muy profesionales y se preocupan por nuestro bienestar durante todo el viaje."
                </p>
                <div className="text-sm text-gray-500">
                  <strong>José Luis R.</strong> • Viaje a Galicia • Septiembre 2024
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para tu próximo viaje?
          </h2>
          <p className="text-xl mb-8">
            Contacta con nosotros y te ayudaremos a planificar tu viaje IMSERSO 
            con total comodidad y tranquilidad
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <Phone className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
              <p className="text-orange-100">925 123 456</p>
              <p className="text-sm text-orange-200 mt-1">Horario: 9:00 - 18:00</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <Mail className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-orange-100">imserso@autocaresdelrio.com</p>
              <p className="text-sm text-orange-200 mt-1">Respuesta en 24h</p>
            </div>
          </div>

          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
            <Link href="/presupuesto">
              Solicitar Información
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
