
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Autobuses del Río - Más de 50 años conectando Toledo con España y Portugal',
  description: 'Empresa de autobuses de Toledo con más de 50 años de experiencia. Servicios para bodas, administraciones públicas, colegios, clubes deportivos, IMSERSO, particulares y excursiones a Puy de Fou. Recogidas desde Toledo y Madrid.',
  keywords: 'autobuses Toledo, autobuses Madrid, transporte bodas, excursiones Puy de Fou, IMSERSO, transporte escolar, alquiler autobuses Madrid',
  authors: [{ name: 'Autobuses del Río' }],
  openGraph: {
    title: 'Autobuses del Río - Más de 50 años de experiencia',
    description: 'Empresa de autobuses de Toledo especializada en bodas, excursiones y transporte de grupos. Servicios desde Toledo y Madrid a toda España y Portugal.',
    type: 'website',
    locale: 'es_ES',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
