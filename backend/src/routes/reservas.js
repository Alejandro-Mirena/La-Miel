import { prisma } from '../lib/prisma.js'

export default async function reservasRoutes(fastify, opts) {
  fastify.post('/reservas', async (request, reply) => {
    try {
      const { nombre, telefono, sucursal, fecha, hora, personas, nota } = request.body

      if (!nombre || !telefono || !sucursal || !fecha || !hora || !personas) {
        return reply.code(400).send({
          success: false,
          message: 'Faltan campos obligatorios para completar la reserva.',
        })
      }

      const reserva = await prisma.reserva.create({
        data: {
          nombre: nombre.trim(),
          telefono: telefono.trim(),
          sucursal,
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
  })
}
