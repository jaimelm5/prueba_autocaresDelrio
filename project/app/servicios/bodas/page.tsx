
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Heart, 
  Users, 
  Clock, 
  Shield, 
  Star, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react'

export default function WeddingServicesPage() {
  const packages = [
    {
      title: "Paquete Básico",
      price: "Desde 400€",
      duration: "4 horas",
      capacity: "Hasta 25 personas",
      features: [
        "Minibús decorado para la ocasión",
        "Conductor uniformado",
        "Recogida en un punto",
        "Seguro completo incluido"
      ]
    },
    {
      title: "Paquete Premium",
      price: "Desde 650€",
      duration: "6 horas",
      capacity: "Hasta 55 personas",
      features: [
        "Autocar de lujo decorado",
        "Conductor con traje de gala",
        "Múltiples puntos de recogida",
        "Coordinación con wedding planner",
        "Agua y refrescos incluidos"
      ],
      popular: true
    },
    {
      title: "Paquete VIP",
      price: "Desde 900€",
      duration: "8 horas",
      capacity: "Hasta 55 personas",
      features: [
        "Autocar VIP con decoración personalizada",
        "Conductor de gala especializado",
        "Servicio completo de recogidas",
        "Coordinación total del transporte",
        "Bebidas y aperitivos incluidos",
        "Fotografías del momento"
      ]
    }
  ]

  const testimonials = [
    {
      name: "María y Carlos",
      date: "Junio 2024",
      text: "El servicio fue perfecto. El autobús llegó puntual, decorado preciosamente y el conductor fue muy profesional. Todos nuestros invitados llegaron cómodos y felices.",
      rating: 5
    },
    {
      name: "Ana y Miguel",
      date: "Septiembre 2024",
      text: "Autobuses del Río hizo que nuestro día fuera aún más especial. La coordinación fue perfecta y el trato, excepcional. Lo recomendamos sin dudarlo.",
      rating: 5
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/AUTOBUS1.jpg"
            alt="Autobús Del Río - Servicio de bodas"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <Heart className="h-16 w-16 text-pink-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Servicios para Bodas
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Tu día especial merece el mejor transporte. Más de 50 años haciendo 
            que las bodas sean perfectas desde el primer momento.
          </p>
          <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700">
            <Link href="/presupuesto">
              Solicitar Presupuesto para tu Boda
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us for Weddings */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegirnos para tu boda?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entendemos que cada detalle cuenta en tu día especial. Por eso ofrecemos 
              un servicio personalizado y cuidado al máximo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Atención Personalizada",
                description: "Cada boda es única y merece un trato especial"
              },
              {
                icon: Users,
                title: "Capacidad Flexible",
                description: "Desde 8 hasta 55 invitados en un solo vehículo"
              },
              {
                icon: Clock,
                title: "Puntualidad Garantizada",
                description: "Nunca llegarás tarde a tu propia boda"
              },
              {
                icon: Shield,
                title: "Máxima Seguridad",
                description: "Conductores profesionales y seguros completos"
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="text-center card-hover">
                  <CardContent className="p-6">
                    <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-pink-600" />
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
              Paquetes para Bodas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elige el paquete que mejor se adapte a tu celebración. 
              Todos incluyen decoración especial y conductor profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`card-hover ${pkg.popular ? 'ring-2 ring-pink-500' : ''}`}>
                {pkg.popular && (
                  <div className="bg-pink-500 text-white text-center py-2 text-sm font-medium">
                    Más Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <div className="text-3xl font-bold text-pink-600">{pkg.price}</div>
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
                  <Button asChild className="w-full mt-6 bg-pink-600 hover:bg-pink-700">
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

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestras parejas
            </h2>
            <p className="text-xl text-gray-600">
              Testimonios reales de bodas que hemos tenido el honor de acompañar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="text-sm text-gray-500">
                    <strong>{testimonial.name}</strong> • {testimonial.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Lista para planificar el transporte de tu boda?
          </h2>
          <p className="text-xl mb-8">
            Contacta con nosotros y te ayudaremos a hacer que tu día sea perfecto
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <Phone className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Llámanos</h3>
              <p className="text-pink-100">925 123 456</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <Mail className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Escríbenos</h3>
              <p className="text-pink-100">bodas@autocaresdelrio.com</p>
            </div>
          </div>

          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
            <Link href="/presupuesto">
              Solicitar Presupuesto Gratuito
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
