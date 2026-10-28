import Fastify from 'fastify'
import cors from '@fastify/cors'
import cookie from '@fastify/cookie'
import rateLimit from '@fastify/rate-limit'
import { env } from './config/env.js'
import reservasRoutes from './routes/reservas.js'
import postulacionesRoutes from './routes/postulaciones.js'

const app = Fastify({ logger: true })

// Rate limiting global básico
await app.register(rateLimit, {
  global: true,
  max: 100,
  timeWindow: '1 minute',
  errorResponseBuilder: () => ({
    success: false,
    message: 'Demasiadas solicitudes. Intenta de nuevo en un minuto.',
  }),
})

await app.register(cors, {
  origin: env.CLIENT_URL ?? true,
  credentials: true,
})

await app.register(cookie)

// Manejador de errores de validación más amigable
app.setErrorHandler((error, request, reply) => {
  if (error.validation) {
    const details = error.validation.map((v) => ({
      field: v.instancePath || v.dataPath || v.params?.missingProperty,
      message: v.message,
    }))
    return reply.status(400).send({
      success: false,
      message: 'Datos inválidos. Revisa los campos enviados.',
      errors: details,
    })
  }

  if (error.statusCode === 429) {
    return reply.status(429).send({
      success: false,
      message: error.message || 'Demasiadas solicitudes. Intenta de nuevo más tarde.',
    })
  }

  app.log.error(error)
  return reply.status(error.statusCode || 500).send({
    success: false,
    message: error.statusCode ? error.message : 'Error interno del servidor',
  })
})

await app.register(reservasRoutes)
await app.register(postulacionesRoutes)

app.get('/health', async () => {
  return { status: 'ok', message: 'La Miel API funcionando correctamente' }
})

try {
  await app.listen({ port: env.PORT, host: '0.0.0.0' })
} catch (error) {
  app.log.error(error)
  process.exit(1)
}
