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

export default async function postulacionesRoutes(fastify, opts) {
  fastify.post('/postulaciones', { schema: postulacionSchema }, async (request, reply) => {
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
        message: 'Ocurrió an error al enviar la postulación. Intenta nuevamente.',
      })
    }
  })
}
