import 'dotenv/config'

function required(key, fallback) {
  const value = process.env[key] ?? fallback
  if (value === undefined || value === null || value === '') {
    throw new Error(`Missing required environment variable: ${key}`)
  }
  return value
}

function optional(key, fallback) {
  const value = process.env[key]
  if (value === undefined || value === null || value === '') {
    return fallback
  }
  return value
}

export const env = {
  NODE_ENV: optional('NODE_ENV', 'development'),
  PORT: Number(optional('PORT', 3000)),
  DATABASE_URL: required('DATABASE_URL'),
  CLIENT_URL: optional('CLIENT_URL', true),
  BETTER_AUTH_SECRET: optional('BETTER_AUTH_SECRET', ''),
  BETTER_AUTH_URL: optional('BETTER_AUTH_URL', `http://localhost:${Number(optional('PORT', 3000))}`),
}

export default env
