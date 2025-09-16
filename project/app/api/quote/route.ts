import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      service, 
      date, 
      passengers, 
      origin, 
      destination, 
      message 
    } = body;

    // Validación básica
    if (!name || !email || !service) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Simular procesamiento de presupuesto
    console.log('Nueva solicitud de presupuesto:', {
      name,
      email,
      phone,
      service,
      date,
      passengers,
      origin,
      destination,
      message,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      message: 'Solicitud de presupuesto enviada correctamente. Te contactaremos en breve con los detalles.'
    });

  } catch (error) {
    console.error('Error al procesar presupuesto:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}