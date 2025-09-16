
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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

    // Guardar en la base de datos
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone: phone || null,
        service,
        message,
        status: 'pending'
      }
    })

    return NextResponse.json(
      { 
        message: 'Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.',
        id: contactMessage.id 
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
