import { useEffect, useRef, useState } from 'react'

const useAlert = () => {
  const [alert, setAlert] = useState({show: false, text: '', type: 'danger'})
  const timeoutRef = useRef(null)

  const showAlert = (text, type = 'danger') => {
    setAlert({ text, type, show: true })
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setAlert({ text: '', type: 'danger', show: false })
    }, 3000)
  }

  const hideAlert = () => {
    clearTimeout(timeoutRef.current)
    setAlert({ text: '', type: 'danger', show: false })
  }

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current)
  }, [])

  return { alert, showAlert, hideAlert }
}

export default useAlert
