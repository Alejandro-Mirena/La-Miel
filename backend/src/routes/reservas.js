import { prisma } from '../lib/prisma.js'

const reservaSchema = {
  body: {
    type: 'object',
    required: ['nombre', 'telefono', 'sucursal', 'fecha', 'hora', 'personas'],
    additionalProperties: false,
    properties: {
      nombre: { type: 'string', minLength: 1, maxLength: 100 },
      telefono: { type: 'string', minLength: 7, maxLength: 20 },
      sucursal: { type: 'string', minLength: 1 },
      fecha: { type: 'string', pattern: '^\\d{4}-\\d{2}-\\d{2}$' },
      hora: { type: 'string', pattern: '^([0-1][0-9]|2[0-3]):[0-5][0-9]$' },
      personas: { type: 'string', minLength: 1 },
      nota: { type: 'string', maxLength: 500 },
    },
  },
}

const getReservasSchema = {
  querystring: {
    type: 'object',
    additionalProperties: false,
    properties: {
      limit: { type: 'string', pattern: '^[0-9]+$' },
    },
  },
}

export default async function reservasRoutes(fastify, opts) {
  fastify.get('/reservas', { schema: getReservasSchema }, async (request, reply) => {
    try {
      const adminKey = request.headers['x-admin-key']
      const expectedKey = process.env.ADMIN_API_KEY

      if (expectedKey && adminKey !== expectedKey) {
        return reply.code(401).send({
          success: false,
          message: 'No autorizado',
        })
      }

      const limit = Math.min(Number(request.query.limit) || 20, 100)

      const reservas = await prisma.reserva.findMany({
        orderBy: { createdAt: 'desc' },
        take: limit,
      })

      return reply.send({
        success: true,
        reservas,
      })
    } catch (error) {
      fastify.log.error(error)
      return reply.code(500).send({
        success: false,
        message: 'Error al obtener las reservas',
      })
    }
  })

  fastify.post(
    '/reservas',
    {
      schema: reservaSchema,
      config: {
        rateLimit: {
          max: 5,
          timeWindow: '1 minute',
        },
      },
    },
    async (request, reply) => {
      try {
        const { nombre, telefono, sucursal, fecha, hora, personas, nota } = request.body

        const reserva = await prisma.reserva.create({
          data: {
            nombre: nombre.trim(),
            telefono: telefono.trim(),
            sucursal: sucursal.trim(),
            fecha: new Date(fecha),
            hora,
            personas,
            nota: nota?.trim() || null,
          },
        })

        return reply.code(201).send({
          success: true,
          message: 'Reserva creada correctamente. Te contactaremos para confirmar.',
          reserva: {
            id: reserva.id,
            nombre: reserva.nombre,
            sucursal: reserva.sucursal,
            fecha: reserva.fecha,
            hora: reserva.hora,
          },
        })
      } catch (error) {
        fastify.log.error(error)
        return reply.code(500).send({
          success: false,
          message: 'Ocurrió un error al crear la reserva. Intenta nuevamente.',
        })
      }
    }
  )
}
