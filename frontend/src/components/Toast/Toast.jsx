import { Toaster } from 'sonner'
import styles from './Toast.module.css'

function ToastViewport() {
  return (
    <Toaster
      position="top-right"
      closeButton
      duration={4500}
      visibleToasts={3}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: styles.toast,
          title: styles.title,
          description: styles.description,
          success: styles.success,
          error: styles.error,
          closeButton: styles.closeButton,
        },
      }}
    />
  )
}

export default ToastViewport
