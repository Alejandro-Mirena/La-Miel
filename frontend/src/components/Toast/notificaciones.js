import { toast } from 'sonner'

export const notificarExito = (mensaje) => toast.success(mensaje)
export const notificarError = (mensaje) => toast.error(mensaje)
