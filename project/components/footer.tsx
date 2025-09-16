
import Link from 'next/link'
import { Bus, Phone, Mail, MapPin, Clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-bus-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <img 
                  src="/logo-autobuses-del-rio.jpg" 
                  alt="Autobuses del Río Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Autobuses del Río</h3>
                <p className="text-bus-blue-200 text-sm">Desde 1970</p>
              </div>
            </div>
            <p className="text-bus-blue-200 text-sm leading-relaxed">
              Más de 50 años conectando Toledo con España y Portugal. 
              Especialistas en transporte de grupos, bodas y excursiones.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicios/bodas" className="text-bus-blue-200 hover:text-white transition-colors">
                  Bodas y Eventos
                </Link>
              </li>
              <li>
                <Link href="/servicios/colegios" className="text-bus-blue-200 hover:text-white transition-colors">
                  Transporte Escolar
                </Link>
              </li>
              <li>
                <Link href="/servicios/puy-de-fou" className="text-bus-blue-200 hover:text-white transition-colors">
                  Excursiones Puy de Fou
                </Link>
              </li>
              <li>
                <Link href="/servicios/imserso" className="text-bus-blue-200 hover:text-white transition-colors">
                  Viajes IMSERSO
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-bus-gold-400" />
                <span className="text-bus-blue-200">925 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-bus-gold-400" />
                <span className="text-bus-blue-200">info@autobusesdelrio.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-bus-gold-400 mt-0.5" />
                <span className="text-bus-blue-200">
                  Calle Principal, 123<br />
                  45001 Toledo, España
                </span>
              </div>
            </div>
          </div>

          {/* Hours & Coverage */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Horarios</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-bus-gold-400 mt-0.5" />
                <div className="text-bus-blue-200">
                  <p>Lun - Vie: 8:00 - 20:00</p>
                  <p>Sáb: 9:00 - 14:00</p>
                  <p>Dom: Servicios especiales</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-bus-blue-800">
              <h5 className="font-semibold text-bus-gold-400 mb-2">Cobertura</h5>
              <p className="text-bus-blue-200 text-sm">
                Toledo • Madrid • España • Portugal
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-bus-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-bus-blue-200 text-sm">
            © 2025 Autobuses del Río. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/empresa" className="text-bus-blue-200 hover:text-white text-sm transition-colors">
              Sobre Nosotros
            </Link>
            <Link href="/contacto" className="text-bus-blue-200 hover:text-white text-sm transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
