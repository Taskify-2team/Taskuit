/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import { AxiosError } from 'axios'
import { useCallback, useState } from 'react'

type AsyncFunction<T, A extends any[]> = (...args: A) => Promise<T>

const useAsync = <T, A extends any[]>(asyncFunction: AsyncFunction<T, A>) => {
  const [pending, setPending] = useState<boolean>(false)
  const [error, setError] = useState<AxiosError | null>(null)
  const [result, setResult] = useState<T | null>(null)

  const requestFunction = useCallback(
    async (...args: A) => {
      setPending(true)
      setError(null)
      try {
        const response = await asyncFunction(...args)
        setResult(response)
        return response
      } catch (err) {
        setError(err as AxiosError)
        return null
      } finally {
        setPending(false)
      }
    },
    [asyncFunction],
  )

  return { pending, error, result, requestFunction }
}

export default useAsync
