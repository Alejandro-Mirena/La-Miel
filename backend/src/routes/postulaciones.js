import { prisma } from '../lib/prisma.js'

const postulacionSchema = {
  body: {
    type: 'object',
    required: ['nombre', 'telefono', 'correo', 'puesto'],
    additionalProperties: false,
    properties: {
      nombre: { type: 'string', minLength: 1, maxLength: 100 },
      telefono: { type: 'string', minLength: 7, maxLength: 20 },
      correo: { type: 'string', format: 'email', maxLength: 80 },
      puesto: { type: 'string', minLength: 1 },
      mensaje: { type: 'string', maxLength: 500 },
    },
  },
}

const getPostulacionesSchema = {
  querystring: {
    type: 'object',
    additionalProperties: false,
    properties: {
      limit: { type: 'string', pattern: '^[0-9]+$' },
    },
  },
}

export default async function postulacionesRoutes(fastify, opts) {
  fastify.get('/postulaciones', { schema: getPostulacionesSchema }, async (request, reply) => {
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

      const postulaciones = await prisma.postulacion.findMany({
        orderBy: { createdAt: 'desc' },
        take: limit,
      })

      return reply.send({
        success: true,
        postulaciones,
      })
    } catch (error) {
      fastify.log.error(error)
      return reply.code(500).send({
        success: false,
        message: 'Error al obtener las postulaciones',
      })
    }
  })

  fastify.post(
    '/postulaciones',
    {
      schema: postulacionSchema,
      config: {
        rateLimit: {
          max: 5,
          timeWindow: '1 minute',
        },
      },
    },
    async (request, reply) => {
      try {
        const { nombre, telefono, correo, puesto, mensaje } = request.body

        const postulacion = await prisma.postulacion.create({
          data: {
            nombre: nombre.trim(),
            telefono: telefono.trim(),
            correo: correo.trim().toLowerCase(),
            puesto: puesto.trim(),
            mensaje: mensaje?.trim() || null,
          },
        })

        return reply.code(201).send({
          success: true,
          message: 'Postulación enviada correctamente. Te contactaremos pronto.',
          postulacion: {
            id: postulacion.id,
            nombre: postulacion.nombre,
            puesto: postulacion.puesto,
          },
        })
      } catch (error) {
        fastify.log.error(error)
        return reply.code(500).send({
          success: false,
          message: 'Ocurrió un error al enviar la postulación. Intenta nuevamente.',
        })
      }
    }
  )
}
