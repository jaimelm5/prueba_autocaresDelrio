
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  ArrowRight,
  Plane,
  Mountain,
  Building,
  Castle
} from 'lucide-react'

export default function DestinationsPage() {
  const destinations = [
    {
      name: "Puy de Fou",
      region: "Toledo",
      category: "Parques Temáticos",
      duration: "Día completo",
      distance: "45 km desde Toledo",
      price: "Desde 25€",
      image: "https://pbs.twimg.com/media/Fvjyp21X0AMHzBj.jpg",
      description: "El parque temático más espectacular de España con shows únicos",
      highlights: ["Shows medievales", "Espectáculos nocturnos", "Restaurantes temáticos"],
      icon: Castle,
      popular: true
    },
    {
      name: "Madrid",
      region: "Comunidad de Madrid",
      category: "Capitales",
      duration: "Flexible",
      distance: "70 km desde Toledo",
      price: "Desde 15€",
      image: "https://i.pinimg.com/originals/37/39/47/3739473574da361cc26e1d463fe8484b.jpg",
      description: "La capital de España con sus museos, parques y vida cultural",
      highlights: ["Museo del Prado", "Palacio Real", "Parque del Retiro"],
      icon: Building
    },
    {
      name: "Sevilla",
      region: "Andalucía",
      category: "Patrimonio",
      duration: "2-3 días",
      distance: "350 km desde Toledo",
      price: "Desde 45€",
      image: "https://thumbs.dreamstime.com/z/giralda-bell-tower-behind-orange-trees-court-seville-cathedral-spain-sept-scenic-241596792.jpg",
      description: "La perla de Andalucía con su impresionante patrimonio histórico",
      highlights: ["Catedral y Giralda", "Alcázar", "Barrio de Santa Cruz"],
      icon: Mountain
    },
    {
      name: "Santiago de Compostela",
      region: "Galicia",
      category: "Peregrinación",
      duration: "3-4 días",
      distance: "600 km desde Toledo",
      price: "Desde 65€",
      image: "https://live.staticflickr.com/3889/14686252593_738de4e385_h.jpg",
      description: "Destino final del Camino de Santiago, patrimonio de la humanidad",
      highlights: ["Catedral", "Casco histórico", "Mercado de Abastos"],
      icon: Mountain
    },
    {
      name: "Lisboa",
      region: "Portugal",
      category: "Internacional",
      duration: "2-3 días",
      distance: "320 km desde Toledo",
      price: "Desde 55€",
      image: "https://thumbs.dreamstime.com/b/famous-vintage-yellow-tram-narrow-streets-alfama-district-lisbon-portugal-symbol-popular-travel-destination-tourist-280545234.jpg",
      description: "La encantadora capital portuguesa con sus tranvías y fado",
      highlights: ["Barrio de Alfama", "Torre de Belém", "Tranvía 28"],
      icon: Plane
    },
    {
      name: "Oporto",
      region: "Portugal",
      category: "Internacional",
      duration: "2-3 días",
      distance: "450 km desde Toledo",
      price: "Desde 65€",
      image: "https://thumbs.dreamstime.com/z/old-houses-dom-luis-i-bridge-over-douro-river-porto-famous-dom-luis-i-bridge-metal-arch-bridge-railbway-pedestrian-bridge-259531572.jpg",
      description: "Ciudad patrimonio mundial famosa por sus vinos y arquitectura",
      highlights: ["Ribeira", "Bodegas de vino", "Puente Dom Luís"],
      icon: Plane
    },
    {
      name: "Barcelona",
      region: "Cataluña",
      category: "Capitales",
      duration: "2-3 días",
      distance: "450 km desde Toledo",
      price: "Desde 55€",
      image: "https://i.pinimg.com/originals/ea/62/b1/ea62b105bcc7699584c27d12d5503b66.jpg",
      description: "Ciudad cosmopolita con arquitectura modernista y playa",
      highlights: ["Sagrada Familia", "Park Güell", "Las Ramblas"],
      icon: Building
    },
    {
      name: "Salamanca",
      region: "Castilla y León",
      category: "Patrimonio",
      duration: "1-2 días",
      distance: "180 km desde Toledo",
      price: "Desde 25€",
      image: "https://i.pinimg.com/736x/d0/87/6b/d0876bdd6ed4f404381020e4b783d367.jpg",
      description: "Ciudad universitaria con impresionante arquitectura dorada",
      highlights: ["Plaza Mayor", "Universidad", "Catedral Nueva"],
      icon: Mountain
    }
  ]

  const categories = [
    { name: "Todos", value: "all" },
    { name: "Parques Temáticos", value: "Parques Temáticos" },
    { name: "Capitales", value: "Capitales" },
    { name: "Patrimonio", value: "Patrimonio" },
    { name: "Internacional", value: "Internacional" },
    { name: "Peregrinación", value: "Peregrinación" }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-bus-blue-600 to-bus-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <MapPin className="h-16 w-16 mx-auto mb-6 text-bus-gold-400" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nuestros Destinos
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Desde Toledo te llevamos a los mejores destinos de España y Portugal. 
            Descubre lugares únicos con la comodidad y seguridad de nuestros autobuses.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={category.value === "all" ? "default" : "outline"}
                className="mb-2"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => {
              const Icon = destination.icon
              return (
                <Card key={index} className="card-hover group overflow-hidden">
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
                    <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full">
                      <Icon className="h-5 w-5 text-bus-blue-600" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{destination.name}</h3>
                      <p className="text-sm text-gray-200">{destination.region}</p>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{destination.name}</CardTitle>
                      <span className="text-lg font-bold text-bus-blue-600">{destination.price}</span>
                    </div>
                    <CardDescription>{destination.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{destination.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{destination.distance}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        <span>Hasta 55 personas</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">Destacados:</h4>
                      <div className="flex flex-wrap gap-1">
                        {destination.highlights.map((highlight, idx) => (
                          <span key={idx} className="text-xs bg-bus-blue-100 text-bus-blue-700 px-2 py-1 rounded">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button asChild className="w-full group-hover:bg-bus-blue-600 group-hover:text-white transition-colors">
                      <Link href="/presupuesto">
                        Solicitar información
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Custom Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            ¿No encuentras tu destino?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Organizamos viajes personalizados a cualquier lugar de España y Portugal. 
            Cuéntanos tu idea y la haremos realidad.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <MapPin className="h-12 w-12 text-bus-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rutas Personalizadas</h3>
              <p className="text-gray-600">Diseñamos el itinerario perfecto para tu grupo</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <Clock className="h-12 w-12 text-bus-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Horarios Flexibles</h3>
              <p className="text-gray-600">Adaptamos los horarios a tus necesidades</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <Star className="h-12 w-12 text-bus-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experiencia Única</h3>
              <p className="text-gray-600">Más de 50 años organizando viajes especiales</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-bus-blue-600 hover:bg-bus-blue-700">
              <Link href="/presupuesto">
                Solicitar Viaje Personalizado
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contacto">
                Consultar Disponibilidad
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
