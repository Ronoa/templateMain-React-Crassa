import { Navigate } from 'react-router-dom'
import { useAuth } from 'components/context/authContext'
import Loading from 'components/Common/Loading'
export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) return <Loading />

  if (!user) return <Navigate to='login' />

  return <>{children}</>
}
