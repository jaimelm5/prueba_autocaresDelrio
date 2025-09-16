
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validación básica
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Todos los campos obligatorios deben ser completados' },
        { status: 400 }
      )
    }

    // Log the contact request (in production, this would save to database)
    console.log('Contact form submission:', {
      name,
      email,
      phone: phone || null,
      service,
      message,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      { 
        message: 'Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.',
        id: `contact_${Date.now()}` 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error al procesar el mensaje de contacto:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor. Por favor, inténtalo de nuevo.' },
      { status: 500 }
    )
  }
}
