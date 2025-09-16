================================================================================
                        AUTOCARES DEL RÍO - GUÍA DE INSTALACIÓN
================================================================================

Este documento contiene las instrucciones completas para instalar y ejecutar
la aplicación web de Autocares del Río en un entorno de desarrollo local.

================================================================================
REQUISITOS PREVIOS
================================================================================

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

1. Node.js (versión 18.x o superior recomendada)
   - Descargar desde: https://nodejs.org/
   - Verificar instalación: node --version

2. npm (incluido con Node.js)
   - Verificar instalación: npm --version

3. PostgreSQL (versión 12 o superior)
   - Descargar desde: https://www.postgresql.org/download/
   - Verificar instalación: psql --version

4. Git (para clonar el repositorio)
   - Descargar desde: https://git-scm.com/
   - Verificar instalación: git --version

================================================================================
ESTRUCTURA DEL PROYECTO
================================================================================

El proyecto utiliza:
- Next.js 14.2.28 como framework principal
- PostgreSQL como base de datos
- Prisma 6.7.0 como ORM
- TypeScript para tipado estático
- Tailwind CSS para estilos
- Arquitectura de workspace con monorepo

Estructura de directorios:
autocares-del-rio/
├── app/                    # Aplicación Next.js principal
│   ├── prisma/            # Configuración de base de datos
│   ├── src/               # Código fuente de la aplicación
│   ├── .env               # Variables de entorno
│   └── package.json       # Dependencias de la app
├── package.json           # Configuración del workspace
└── README.txt            # Este archivo

================================================================================
PASOS DE INSTALACIÓN
================================================================================

1. CLONAR O ACCEDER AL PROYECTO
   Si ya tienes el proyecto descargado, navega al directorio:
   cd /ruta/a/autocares-del-rio

2. INSTALAR DEPENDENCIAS
   Desde el directorio raíz del proyecto, ejecuta:
   
   npm install
   
   Esto instalará todas las dependencias tanto del workspace principal como
   de la aplicación en el subdirectorio 'app'.

3. CONFIGURAR VARIABLES DE ENTORNO
   El proyecto ya incluye un archivo .env en app/.env con la configuración
   de base de datos. Para desarrollo local, puedes:
   
   a) Usar la base de datos remota existente (recomendado para pruebas):
      - El archivo app/.env ya contiene la URL de conexión
      - No requiere configuración adicional
   
   b) Configurar una base de datos PostgreSQL local:
      - Crea una nueva base de datos en PostgreSQL
      - Modifica el archivo app/.env con tu configuración local:
        DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/autocares_del_rio"

4. CONFIGURAR BASE DE DATOS CON PRISMA
   
   a) Generar el cliente de Prisma:
      cd app
      npx prisma generate
   
   b) Ejecutar migraciones (crear tablas):
      npx prisma db push
      
      O si prefieres usar migraciones:
      npx prisma migrate dev --name init
   
   c) (Opcional) Poblar la base de datos con datos de prueba:
      Si existe un archivo seed, ejecuta:
      npx prisma db seed

5. VERIFICAR INSTALACIÓN
   Puedes verificar que la base de datos esté configurada correctamente:
   cd app
   npx prisma studio
   
   Esto abrirá una interfaz web para explorar la base de datos.

================================================================================
COMANDOS PARA EJECUTAR EL PROYECTO
================================================================================

DESARROLLO (modo desarrollo con hot-reload):
cd app
npm run dev

La aplicación estará disponible en: http://localhost:3000

PRODUCCIÓN:
1. Construir la aplicación:
   cd app
   npm run build

2. Ejecutar en modo producción:
   npm run start

OTROS COMANDOS ÚTILES:
- Linting del código:
  cd app
  npm run lint

- Explorar base de datos:
  cd app
  npx prisma studio

- Resetear base de datos:
  cd app
  npx prisma migrate reset

- Ver logs de Prisma:
  cd app
  npx prisma db push --preview-feature

================================================================================
CONFIGURACIÓN DE BASE DE DATOS LOCAL (OPCIONAL)
================================================================================

Si prefieres usar una base de datos PostgreSQL local en lugar de la remota:

1. CREAR BASE DE DATOS:
   psql -U postgres
   CREATE DATABASE autocares_del_rio;
   CREATE USER autocares_user WITH PASSWORD 'tu_contraseña';
   GRANT ALL PRIVILEGES ON DATABASE autocares_del_rio TO autocares_user;
   \q

2. ACTUALIZAR VARIABLES DE ENTORNO:
   Edita el archivo app/.env:
   DATABASE_URL="postgresql://autocares_user:tu_contraseña@localhost:5432/autocares_del_rio"

3. EJECUTAR MIGRACIONES:
   cd app
   npx prisma db push

================================================================================
SOLUCIÓN DE PROBLEMAS COMUNES
================================================================================

PROBLEMA: Error "Cannot find module '@prisma/client'"
SOLUCIÓN: 
cd app
npx prisma generate

PROBLEMA: Error de conexión a la base de datos
SOLUCIÓN: 
- Verificar que PostgreSQL esté ejecutándose
- Comprobar las credenciales en el archivo .env
- Verificar que la base de datos existe

PROBLEMA: Puerto 3000 ya en uso
SOLUCIÓN: 
- Cambiar el puerto: npm run dev -- -p 3001
- O terminar el proceso que usa el puerto 3000

PROBLEMA: Errores de TypeScript
SOLUCIÓN: 
cd app
npm run lint
# Revisar y corregir los errores mostrados

PROBLEMA: Dependencias desactualizadas
SOLUCIÓN: 
npm update
cd app
npm update

================================================================================
INFORMACIÓN ADICIONAL PARA DESARROLLO
================================================================================

TECNOLOGÍAS UTILIZADAS:
- Next.js 14.2.28 (React Framework)
- TypeScript 5.2.2
- Prisma 6.7.0 (ORM)
- PostgreSQL (Base de datos)
- Tailwind CSS (Estilos)
- Radix UI (Componentes)
- React Hook Form (Formularios)
- Zod (Validación)

FUNCIONALIDADES PRINCIPALES:
- Sistema de contacto con formularios
- Solicitudes de presupuesto
- Gestión de servicios de transporte
- Interfaz responsive
- Base de datos para almacenar mensajes y solicitudes

ESTRUCTURA DE LA BASE DE DATOS:
- contact_messages: Mensajes de contacto
- quote_requests: Solicitudes de presupuesto

PUERTOS UTILIZADOS:
- 3000: Aplicación Next.js (desarrollo)
- 5432: PostgreSQL (base de datos)
- 5555: Prisma Studio (opcional)

ARCHIVOS IMPORTANTES:
- app/prisma/schema.prisma: Esquema de base de datos
- app/.env: Variables de entorno
- app/src/: Código fuente de la aplicación
- package.json: Configuración del proyecto

================================================================================
COMANDOS DE REFERENCIA RÁPIDA
================================================================================

# Instalación inicial
npm install
cd app && npx prisma generate && npx prisma db push

# Ejecutar en desarrollo
cd app && npm run dev

# Construir para producción
cd app && npm run build && npm run start

# Explorar base de datos
cd app && npx prisma studio

# Resetear base de datos
cd app && npx prisma migrate reset

================================================================================
CONTACTO Y SOPORTE
================================================================================

Para problemas técnicos o dudas sobre el desarrollo:
1. Revisar esta documentación
2. Consultar la documentación oficial de Next.js: https://nextjs.org/docs
3. Consultar la documentación de Prisma: https://www.prisma.io/docs

================================================================================
NOTAS FINALES
================================================================================

- Mantén siempre actualizado el archivo .env con las credenciales correctas
- Realiza backups regulares de la base de datos en producción
- Usa 'npm run lint' regularmente para mantener la calidad del código
- El proyecto está configurado para usar TypeScript, aprovecha el tipado estático
- La aplicación incluye componentes reutilizables basados en Radix UI

¡La aplicación de Autocares del Río está lista para desarrollo!

Última actualización: Junio 2025