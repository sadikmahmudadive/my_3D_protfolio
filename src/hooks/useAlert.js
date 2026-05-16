import { useState } from 'react'

const useAlert = () => {
  const [alert, setAlert] = useState({show: false, text: '', type: 'danger'})

  const showAlert = (text, type = 'danger') => {
    setAlert({ text, type, show: true })
    //setTimeout(() => setAlert({...alert, show: false}), 3000)
  }

  const hideAlert = () => {
    setAlert({ text: '', type: 'danger', show: false })
    //setTimeout(() => setAlert({...alert, show: false}), 3000)
  }

  return { alert, showAlert, hideAlert }
}

export default useAlert
