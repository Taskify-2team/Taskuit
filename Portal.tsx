import { ReactElement, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export function ModalPortal({ children }: { children: ReactElement }) {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setPortalElement(document.getElementById('modal'))
  }, [])

  return portalElement ? createPortal(children, portalElement) : null
}

export function ToastPortal({ children }: { children: ReactElement }) {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setPortalElement(document.getElementById('toast'))
  }, [])

  return portalElement ? createPortal(children, portalElement) : null
}
