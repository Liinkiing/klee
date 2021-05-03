import { useState, useEffect } from 'react'

export const useHasMounted = (): boolean => {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted
}
