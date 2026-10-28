export function badRequest(message, details) {
  const err = new Error(message)
  err.statusCode = 400
  if (details) err.details = details
  return err
}

export function tooManyRequests(message) {
  const err = new Error(message)
  err.statusCode = 429
  return err
}
