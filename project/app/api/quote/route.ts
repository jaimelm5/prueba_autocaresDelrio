
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      name, 
      email, 
      phone, 
      service, 
      origin, 
      destination, 
      date, 
      passengers, 
      duration, 
      additionalInfo 
    } = body

    // Validación básica
    if (!name || !email || !service) {
      return NextResponse.json(
        { error: 'Los campos nombre, email y servicio son obligatorios' },
        { status: 400 }
      )
    }

    // Log the quote request (in production, this would save to database)
    console.log('Quote request submission:', {
      name,
      email,
      phone: phone || null,
      service,
      origin: origin || null,
      destination: destination || null,
      date: date || null,
      passengers: passengers ? parseInt(passengers) : null,
      duration: duration || null,
      additionalInfo: additionalInfo || null,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      { 
        message: 'Solicitud de presupuesto enviada correctamente. Te contactaremos en las próximas 24 horas.',
        id: `quote_${Date.now()}` 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error al procesar la solicitud de presupuesto:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor. Por favor, inténtalo de nuevo.' },
      { status: 500 }
    )
  }
}
