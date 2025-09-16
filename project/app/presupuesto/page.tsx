
'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Calculator, 
  Send,
  CheckCircle,
  Clock,
  Shield,
  Award
} from 'lucide-react'
import { toast } from 'sonner'

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    origin: '',
    destination: '',
    date: '',
    passengers: '',
    duration: '',
    additionalInfo: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const services = [
    'Bodas y Eventos',
    'Excursiones Puy de Fou',
    'Transporte Escolar',
    'Administraciones Públicas',
    'Clubes Deportivos',
    'Viajes IMSERSO',
    'Grupos Particulares',
    'Otro servicio'
  ]

  const durations = [
    'Medio día (4 horas)',
    'Día completo (8 horas)',
    'Fin de semana (2 días)',
    'Varios días',
    'Solo trayecto',
    'Ida y vuelta'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success(data.message)
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          origin: '',
          destination: '',
          date: '',
          passengers: '',
          duration: '',
          additionalInfo: ''
        })
      } else {
        toast.error(data.error || 'Error al enviar la solicitud')
      }
    } catch (error) {
      console.error('Error:', error)
      toast.error('Error al enviar la solicitud. Por favor, inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-bus-gold-500 to-bus-gold-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Calculator className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Solicitar Presupuesto
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Obtén tu presupuesto personalizado y gratuito. Te responderemos en menos de 24 horas 
            con la mejor propuesta para tu transporte.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Gratuito</h3>
              <p className="text-gray-600">Sin compromiso ni costes ocultos</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Respuesta en 24h</h3>
              <p className="text-gray-600">Te contactamos rápidamente</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">50+ Años</h3>
              <p className="text-gray-600">De experiencia nos avalan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Formulario de Presupuesto</CardTitle>
              <CardDescription className="text-lg">
                Completa todos los campos para recibir un presupuesto preciso y personalizado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Información de contacto</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="600 123 456"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Tipo de servicio *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bus-blue-600 focus:border-transparent"
                      >
                        <option value="">Selecciona un servicio</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Trip Details */}
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Detalles del viaje</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-2">
                        Origen
                      </label>
                      <Input
                        id="origin"
                        name="origin"
                        type="text"
                        value={formData.origin}
                        onChange={handleChange}
                        placeholder="Ciudad o dirección de salida"
                      />
                    </div>
                    <div>
                      <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                        Destino
                      </label>
                      <Input
                        id="destination"
                        name="destination"
                        type="text"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="Ciudad o dirección de destino"
                      />
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                        Fecha del servicio
                      </label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-2">
                        Número de pasajeros
                      </label>
                      <Input
                        id="passengers"
                        name="passengers"
                        type="number"
                        min="1"
                        max="55"
                        value={formData.passengers}
                        onChange={handleChange}
                        placeholder="Ej: 25"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                        Duración del servicio
                      </label>
                      <select
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bus-blue-600 focus:border-transparent"
                      >
                        <option value="">Selecciona la duración</option>
                        {durations.map((duration) => (
                          <option key={duration} value={duration}>
                            {duration}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Información adicional</h3>
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                      Detalles adicionales
                    </label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      placeholder="Cuéntanos cualquier detalle especial: horarios específicos, paradas intermedias, decoración especial, equipaje extra, etc."
                      rows={4}
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-bus-gold-500 hover:bg-bus-gold-600 text-white py-3 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Enviando solicitud...'
                  ) : (
                    <>
                      Solicitar Presupuesto Gratuito
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

                <div className="text-center text-sm text-gray-600">
                  <Shield className="h-4 w-4 inline mr-1" />
                  Tus datos están protegidos y solo se utilizarán para enviarte el presupuesto
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
