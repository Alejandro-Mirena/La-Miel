import { prisma } from '../lib/prisma.js'

export default async function postulacionesRoutes(fastify, opts) {
  fastify.post('/postulaciones', async (request, reply) => {
    try {
      const { nombre, telefono, correo, puesto, mensaje } = request.body

      if (!nombre || !telefono || !correo || !puesto) {
        return reply.code(400).send({
          success: false,
          message: 'Faltan campos obligatorios para enviar la postulación.',
        })
      }

      const postulacion = await prisma.postulacion.create({
        data: {
          nombre: nombre.trim(),
          telefono: telefono.trim(),
          correo: correo.trim().toLowerCase(),
          puesto,
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
