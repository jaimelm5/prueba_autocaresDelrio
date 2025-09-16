
'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle
} from 'lucide-react'
import { toast } from 'sonner'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
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
          message: ''
        })
      } else {
        toast.error(data.error || 'Error al enviar el mensaje')
      }
    } catch (error) {
      console.error('Error:', error)
      toast.error('Error al enviar el mensaje. Por favor, inténtalo de nuevo.')
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
      <section className="py-20 bg-gradient-to-br from-bus-blue-600 to-bus-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contacto
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Contacta con nosotros y te responderemos 
            en menos de 24 horas.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <div className="bg-bus-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-bus-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
                <p className="text-gray-600 mb-2">Atención inmediata</p>
                <p className="text-2xl font-bold text-bus-blue-600">925 123 456</p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <div className="bg-bus-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-bus-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600 mb-2">Respuesta en 24h</p>
                <p className="text-lg text-bus-blue-600">info@autocaresdelrio.com</p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <div className="bg-bus-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-bus-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Dirección</h3>
                <p className="text-gray-600 mb-2">Visítanos en</p>
                <p className="text-bus-blue-600">Calle Principal, 123<br />45001 Toledo</p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <div className="bg-bus-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-bus-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Horarios</h3>
                <p className="text-gray-600 mb-2">Lun-Vie: 8:00-20:00</p>
                <p className="text-bus-blue-600">Sáb: 9:00-14:00<br />Dom: Servicios especiales</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Envíanos un mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        Servicio de interés *
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

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu proyecto o necesidades de transporte..."
                      rows={5}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-bus-blue-600 hover:bg-bus-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    ¿Por qué elegirnos?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span>Más de 50 años de experiencia</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span>Flota moderna y segura</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span>Conductores profesionales</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span>Atención personalizada</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span>Cobertura nacional e internacional</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Información adicional</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Presupuestos</h4>
                    <p className="text-gray-600 text-sm">
                      Todos nuestros presupuestos son gratuitos y sin compromiso. 
                      Te responderemos en menos de 24 horas.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Servicios de emergencia</h4>
                    <p className="text-gray-600 text-sm">
                      Disponemos de servicios de emergencia 24/7 para situaciones urgentes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Zona de cobertura</h4>
                    <p className="text-gray-600 text-sm">
                      Desde Toledo y Madrid a toda España y Portugal.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
