import 'dotenv/config'
import Fastify from 'fastify'
import cors from '@fastify/cors'
import cookie from '@fastify/cookie'

const app = Fastify({ logger: true })

await app.register(cors, {
  origin: process.env.CLIENT_URL ?? true,
  credentials: true,
})

await app.register(cookie)

const port = Number(process.env.PORT ?? 3000)

try {
  await app.listen({ port, host: '0.0.0.0' })
} catch (error) {
  app.log.error(error)
  process.exit(1)
}
