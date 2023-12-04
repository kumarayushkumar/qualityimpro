import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import NotFound from '../components/NotFound'

export default function Error() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate('/', { replace: true })
    }, 3000)

    return () => clearTimeout(redirectTimeout)
  }, [])

  return <NotFound />
}
